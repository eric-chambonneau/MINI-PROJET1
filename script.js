const panels = document.querySelectorAll('.container > *')

for (let panel of panels) {
    panel.addEventListener("click" , function() {
        panels.array.forEach(p => p.classList.remove("active") 
            
        );
        panel.classList.add("active");
    });
}


