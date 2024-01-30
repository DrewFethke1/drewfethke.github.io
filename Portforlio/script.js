function navigateTo(page) {
    console.log("Navigating to:", page);

    
    const validPages = ['AboutMe', 'MyProjects', 'index', 'extra', 'extra', 'extra']; 
    if (!validPages.includes(page)) {
        console.error('Invalid page requested');
        document.getElementById('content').innerHTML = '<p>Invalid page requested.</p>';
        return;
    }

    
    if (page === 'AboutMe') {
        window.location.href = 'About Me.html';
    } else if (page === 'MyProjects') {
        window.location.href = 'My Projects.html';
    } else if (page === 'index') {
        window.location.href = 'index.html';
    } else if (page === 'TextPage') {
        window.location.href = 'TextPage.html';
    } else if (page === 'SankeyGraph') {
        window.location.href = 'SankeyGraph.html';
    } else if (page === 'index') {
        window.location.href = 'index.html';
    } else {
        fetch(page + '.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const contentType = response.headers.get("content-type");
            if (!contentType || !contentType.includes("text/html")) {
                throw new TypeError("Oops, we haven't got HTML!");
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading page:', error);
            document.getElementById('content').innerHTML = '<p>Error loading content. ' + error.message + '</p>';
        });
    }
}