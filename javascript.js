var myPageIds = ['aboutme', 'myresearch', 'myprojects', 'contactme'];

const openSidebar = () => {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("sidebar").style.marginLeft = "250px";
};

const closeSidebar = () => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("sidebar").style.marginLeft = "0";
};

function showContent(id) {
    var x = document.getElementById(id);
    x.style.display = "block";
    myPageIds.forEach(pageId => {
        if (pageId !== id) {
            document.getElementById(pageId).style.display = "none";
        }
    });
}
