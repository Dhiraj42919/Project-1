
line1 = document.getElementsByClassName("text")[0]
line2 = document.getElementsByClassName("text")[1]
line3 = document.getElementsByClassName("text")[2]
line4 = document.getElementsByClassName("text")[3]
line5 = document.getElementsByClassName("text")[4]


line1span = document.getElementsByClassName("blinking-dots")[0]
line2span = document.getElementsByClassName("blinking-dots")[1]
line3span = document.getElementsByClassName("blinking-dots")[2]
line4span = document.getElementsByClassName("blinking-dots")[3]
line5span = document.getElementsByClassName("blinking-dots")[4]

final = document.getElementsByClassName("final")[0]



async function task1() {

    function getRandomNumber() {
        return Math.floor(Math.random() * 7) + 1;
    }

    let random_number = getRandomNumber()

    return new Promise(resolve => {
        setTimeout(() => {
            line1.innerHTML = "Initializing Hacking"
            line1span.innerHTML = "..."
            resolve()
        }, random_number * 1000);

    });
}




async function task2() {

    function getRandomNumber() {
        return Math.floor(Math.random() * 7) + 1;
    }

    let random_number = getRandomNumber()

    return new Promise(resolve => {
        setTimeout(() => {
            line1span.classList.remove("blinking-dots")
            line2.innerHTML = "Reading your files"
            line2span.innerHTML = "..."
            resolve()
        }, random_number * 1000);

    });
}



async function task3() {

    function getRandomNumber() {
        return Math.floor(Math.random() * 7) + 1;
    }

    let random_number = getRandomNumber()

    return new Promise(resolve => {
        setTimeout(() => {
            line2span.classList.remove("blinking-dots")
            line3.innerHTML = "UPI Bank account and Password files Detected"
            line3span.innerHTML = "..."
            resolve()
        }, random_number * 1000);
    });
}



async function task4() {
    function getRandomNumber() {
        return Math.floor(Math.random() * 7) + 1;
    }

    let random_number = getRandomNumber()

    return new Promise(resolve => {
        setTimeout(() => {
            line3span.classList.remove("blinking-dots")
            line4.innerHTML = "Sending all passwords and personal files to server"
            line4span.innerHTML = "..."
            resolve()
        }, random_number * 1000);
    });
}



async function task5() {

    function getRandomNumber() {
        return Math.floor(Math.random() * 7) + 1;
    }

    let random_number = getRandomNumber()

    return new Promise(resolve => {
        setTimeout(() => {
            line4span.classList.remove("blinking-dots")
            line5.innerHTML = "Cleaning up"
            line5span.innerHTML = "..."
            resolve()
        }, random_number * 1000);
    });
}


async function task6() {
    return new Promise((resolve) => {
      setTimeout(() => {
        line5span.classList.remove("blinking-dots")
        final.innerHTML="Congradulation,Your System is successfully hacked!!"
      }, 2000);
    }
    )
}
// Function to execute tasks sequentially
async function executeTasks() {
    await task1();
    await task2();
    await task3();
    await task4();
    await task5();
    await task6();
}

executeTasks();
