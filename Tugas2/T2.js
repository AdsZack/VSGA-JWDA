function hitung() {
    var angka1 = parseFloat(document.getElementById('angka1').value);
    var operator = document.getElementById('operator').value;
    var angka2 = parseFloat(document.getElementById('angka2').value);
    var hasil;

    switch (operator) {
        case '+':
            hasil = angka1 + angka2;
            break;
        case '-':
            hasil = angka1 - angka2;
            break;
        case '*':
            hasil = angka1 * angka2;
            break;
        case '/':
            hasil = angka1 / angka2;
            break;
        default:
            hasil = 0;
            break;
    }

    document.getElementById('hasil').value = hasil;
}
