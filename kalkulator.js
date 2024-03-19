function hitung() {
    var nomor1 = parseFloat(document.getElementById("nomor1").value);
    var nomor2 = parseFloat(document.getElementById("nomor2").value);
    var operator = document.getElementById("operator").value;
    var result;

    switch (operator) {
        case "tambah":
            result = nomor1 + nomor2;
            break;
        case "kurang":
            result = nomor1 - nomor2;
            break;
        case "kali":
            result = nomor1 * nomor2;
            break;
        case "bagi":
            if (nomor2 === 0) {
                result = "Tidak dapat dibagi oleh 0";
            } else {
                result = nomor1 / nomor2;
            }
            break;
        case "modulus":
            result = nomor1 % nomor2;
            break;
        default:
            result = "Operator tidak valid";
        }
        document.getElementById("result").textContent = "Hasil: " + result;
    }
    
        
    

