let dialogs = document.querySelectorAll('.fdialog');

dialogs.forEach(d => {
    d.addEventListener('change', function(event) {
        let files = event.target.files;
        let outlet = document.getElementById('listing');

        while (outlet.firstChild) {
            outlet.removeChild(outlet.firstChild);
        }

        for (let i = 0; i < files.length; i++) {
            let el = document.createElement('li');
            el.innerHTML = files[i].webkitRelativePath || files[i].name;
            outlet.appendChild(el);
        }
    })
});