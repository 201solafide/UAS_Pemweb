document.addEventListener('DOMContentLoaded', function () {
    
    document.getElementById('dataForm').addEventListener('submit', function (event) {
      event.preventDefault(); 
  
      if (validateForm()) {
        processData();
      }
    });
  
    document.getElementById('statusMHS').addEventListener('change', function () {
      alert('Status Mahasiswa terpilih');
    });
  
    // var genderRadios = document.querySelectorAll('input[name="kelas"]');
    // genderRadios.forEach(function (radio) {
    //   radio.addEventListener('change', function () {
    //     alert('Kelas ' + this.value + ' berhasil dipilih');
    //   });
    // });
  
    function validateForm() {
      var name = document.getElementById('name').value;
      var nim = document.getElementById('nim').value;
  
      if (name === '' || nim === '') {
        alert('Name and NIM harus dipilih');
        return false;
      }
  
      return true;
    }
  
    function processData() {
      var name = document.getElementById('name').value;
      var nim = document.getElementById('nim').value;
      var subscribe = document.getElementById('statusMHS').checked ? 'Aktif' : 'NON-Aktif';
      var kelas = document.querySelector('input[name="kelas"]:checked').value;
  
      var newRow = document.createElement('tr');
  
      newRow.innerHTML = `
        <td>${name}</td>
        <td>${nim}</td>
        <td>${subscribe}</td>
        <td>${kelas}</td>
      `;
  
      document.getElementById('dataTable').getElementsByTagName('tbody')[0].appendChild(newRow);
  
      document.getElementById('dataForm').reset();
    }
});
  