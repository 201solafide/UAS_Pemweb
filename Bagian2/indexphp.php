<?php
include '../Bagian3/indexconectsql.php';

class FormData {
    private $name;
    private $nim;
    private $statusMhs;
    private $kelas;

    public function __construct($name, $nim, $statusMhs, $kelas) {
        $this->name = $name;
        $this->nim = $nim;
        $this->statusMhs = $statusMhs;
        $this->kelas = $kelas;
    }

    public function displayInfo() {
        echo '<tr>';
        echo '<td>' . $this->name . '</td>';
        echo '<td>' . $this->nim . '</td>';
        echo '<td>' . $this->statusMhs . '</td>';
        echo '<td>' . $this->kelas . '</td>';
        echo '</tr>';
    }

    public function saveToDatabase() {
        global $conn;

        $sql = "INSERT INTO FormData (name, nim, statusMhs, kelas) VALUES ('$this->name', $this->nim, '$this->statusMhs', '$this->kelas')";

        if ($conn->query($sql) === TRUE) {
            echo "Data berhasil disimpan ke database.";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
}

function displayFormData() {
    global $conn;

    // Simulasi database (array sementara)
    $formEntries = [];

    // Cek apakah formulir telah dikirim
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Mengambil nilai dari formulir
        $name = $_POST['name'] ?? '';
        $nim = $_POST['nim'] ?? '';
        $statusMhs = isset($_POST['statusMHS']) ? 'Aktif' : 'NON-Aktif';
        $kelas = $_POST['kelas'] ?? '';

        $formEntries[] = new FormData($name, $nim, $statusMhs, $kelas);

        end($formEntries)->saveToDatabase();
    }
    foreach ($formEntries as $entry) {
        $entry->displayInfo();
    }
}
?>
