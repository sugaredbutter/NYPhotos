buttons = [
    { label: "Home Page", url: "./" },
    { label: "Japan 2024", url: "japan2024" },
    { label: "Alaska 2024", url: "alaska2024" },
    { label: "Hawaii 2024", url: "hawaii2024" },
    { label: "Greer 2025", url: "greer2025" },
    { label: "Astrophotography", url: "astro" }
];

function display_img_table(folder_path, file_names, container_id) {
    const gallery = document.getElementById(container_id);
    
    file_names.forEach(filename => {
        const a = document.createElement("a");
        a.href = `${folder_path}/${filename}`;
        a.target = "_blank";
    
        const img = document.createElement("img");
        img.src = `${folder_path}/${filename}`;
        img.alt = filename;
    
        a.appendChild(img);
        gallery.appendChild(a);
    });
    
}

function display_navigation(container_id) {
    const nav = document.getElementById(container_id);
    buttons.forEach(({ label, url }) => {
        const span = document.createElement('span');
        span.textContent = label;
        span.onclick = () => location.href = url;
        nav.appendChild(span);
    });    

}