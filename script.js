async function redirectToWhatsapp() {
    if (!navigator.clipboard) {
        console.error('Clipboard API not supported on this browser');
        return;
    }
    
    try {
        let text = await navigator.clipboard.readText();

        // Remove any non-numeric characters
        let formattedNumber = text.replace(/[^0-9]/g, '');

        // Create the URL
        let url = "https://wa.me/" + formattedNumber;

        // Open the URL in a new tab/window
        window.open(url, '_blank');

    } catch (err) {
        console.error('Failed to read clipboard contents:', err);
    }
}
