// File Upload Practice

const input = document.querySelector('input');
const preview = document.querySelector('.file_list');

input.addEventListener('change', showTextFile);

function showTextFile() {
    const selectedFiles = input.files;
    const list = document.createElement('ul');
    preview.appendChild(list);

    for(const file of selectedFiles) {
        const listItem = document.createElement('li');
        const summary = document.createElement('div');

        // File 객체의 webkitRelativePath 속성을 이용하여,
        // 디렉토리 안의 파일의 상대경로를 가져올 수 있음
        summary.textContent = file.webkitRelativePath;

        listItem.appendChild(summary);
        list.appendChild(listItem);
    }
}
