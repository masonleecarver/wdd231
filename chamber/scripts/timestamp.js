document.addEventListener('DOMContentLoaded', function() {
    const timestamp = document.querySelector("#time");
    const form = document.querySelector("form");
    
    
    form.addEventListener('submit', () => {
        const now = new Date();
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        };
        timestamp.value = now.toLocaleDateString("en-US", options);

    });
})