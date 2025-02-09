while(1){
    err_ran = Math.random();
    console.log(err_ran);

    let number_1 = Number(prompt("Enter your first number: "));
    let number_2 = Number(prompt("Enter your second number: "));

    alert("Now put 1 for +\n2 for -\n3 for *\n4 for /");
    let operation = Number(prompt(">>>"));

    

    if (err_ran < 0.1) {
        if (operation == 1) {
            alert(number_1, '-', number_2, '=', number_1 - number_2);
        }
        else if (operation == 2) {
            alert(number_1, '/', number_2, '=', number_1 / number_2);
        }
        else if (operation == 3) {
            alert(number_1, '+', number_2, '=', number_1 + number_2);
        }
        else if (operation == 4) {
            alert(number_1, '^', number_2, '=', number_1 ** number_2);
        }
    }
    else {
        if (operation == 1) {
            alert(number_1, '+', number_2, '=', number_1 + number_2);
        }
        else if (operation == 2) {
            alert(number_1, '-', number_2, '=', number_1 - number_2);
        }
        else if (operation == 3) {
            alert(number_1, '*', number_2, '=', number_1 * number_2);
        }
        else if (operation == 4) {
            alert(number_1, '/', number_2, '=', number_1 / number_2);
        }
    }

}

//1 for +\n2 for -\n3 for *\n4 for /