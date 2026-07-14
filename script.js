const WEBAPP_URL = "https://script.google.com/macros/s/AKfycbzL6nz9-r3ILRNPBqd6tews7lRnG67313w86-PAchO-MjQx9ERNujGDQi1hz2FgYXrs/exec";

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("activationForm");

    form.addEventListener("submit", async function (e) {

        e.preventDefault();

        const customerId = document.getElementById("customerId").value.trim();
        const licenseKey = document.getElementById("licenseKey").value.trim();

        try {

            const response = await fetch(WEBAPP_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8"
                },
                body: JSON.stringify({
                    customerId: customerId,
                    licenseKey: licenseKey,
                    browser: navigator.userAgent
                })
            });

            const text = await response.text();

            console.log("Response:");
            console.log(text);

            alert("Data sent successfully.");

        }
        catch (err) {

            console.error(err);

            alert("ERROR:\n\n" + err);

        }

    });

});