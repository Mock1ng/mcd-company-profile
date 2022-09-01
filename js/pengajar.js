window.onload = () => {
    wrapper();
}

const data = [{
        nama: 'Ayu Tira Safitri',
        jurusan: 'Kimia',
        alamat: 'Ciputat, Tangerang Selatan',
        pengalaman: 'Pengajar tematik SD, IPA SMP dan Bahasa Arab dari tahun 2018'
    },
    {
        nama: 'Baywcksn',
        jurusan: 'Sistem Informasi',
        alamat: 'Cikupa, Tangerang',
        pengalaman: 'Pengajar pemrograman walau dalam mimpi'
    },
    {
        nama: 'Akubaru risuki',
        jurusan: 'Cinta Menggelora',
        alamat: 'Gatau, Daerah JakSel ae',
        pengalaman: 'Pengajar bucin-bucin agar segera menjadi fakboi'
    },
    {
        nama: 'Rijuki Rama',
        jurusan: 'Segala Bidang',
        alamat: 'Hmm, Depan TMII pokoknya',
        pengalaman: 'Pengejar kebahagiaan lewat kekesalan'
    },
    {
        nama: 'Hanifu',
        jurusan: 'Perkosan',
        alamat: 'Ciputat, TangSel (yoman bener)',
        pengalaman: 'Pengajar berbudidaya ketika bertamu di kosan orang'
    },
    {
        nama: '2Ayu Tira Safitri',
        jurusan: 'Kimia',
        alamat: 'Ciputat, Tangerang Selatan',
        pengalaman: 'Pengajar tematik SD, IPA SMP dan Bahasa Arab dari tahun 2018'
    },
    {
        nama: 'Baywcksn',
        jurusan: 'Sistem Informasi',
        alamat: 'Cikupa, Tangerang',
        pengalaman: 'Pengajar pemrograman walau dalam mimpi'
    },
    {
        nama: 'Akubaru risuki',
        jurusan: 'Cinta Menggelora',
        alamat: 'Gatau, Daerah JakSel ae',
        pengalaman: 'Pengajar bucin-bucin agar segera menjadi fakboi'
    },
    {
        nama: 'Rijuki Rama',
        jurusan: 'Segala Bidang',
        alamat: 'Hmm, Depan TMII pokoknya',
        pengalaman: 'Pengejar kebahagiaan lewat kekesalan'
    },
    {
        nama: 'Hanifu',
        jurusan: 'Perkosan',
        alamat: 'Ciputat, TangSel (yoman bener)',
        pengalaman: 'Pengajar berbudidaya ketika bertamu di kosan orang'
    },
    {
        nama: '3Ayu Tira Safitri',
        jurusan: 'Kimia',
        alamat: 'Ciputat, Tangerang Selatan',
        pengalaman: 'Pengajar tematik SD, IPA SMP dan Bahasa Arab dari tahun 2018'
    },
    {
        nama: 'Baywcksn',
        jurusan: 'Sistem Informasi',
        alamat: 'Cikupa, Tangerang',
        pengalaman: 'Pengajar pemrograman walau dalam mimpi'
    },
    {
        nama: 'Akubaru risuki',
        jurusan: 'Cinta Menggelora',
        alamat: 'Gatau, Daerah JakSel ae',
        pengalaman: 'Pengajar bucin-bucin agar segera menjadi fakboi'
    },
    {
        nama: 'Rijuki Rama',
        jurusan: 'Segala Bidang',
        alamat: 'Hmm, Depan TMII pokoknya',
        pengalaman: 'Pengejar kebahagiaan lewat kekesalan'
    },
    {
        nama: 'data-15Hanifu',
        jurusan: 'Perkosan',
        alamat: 'Ciputat, TangSel (yoman bener)',
        pengalaman: 'Pengajar berbudidaya ketika bertamu di kosan orang'
    },
    {
        nama: 'Ayu Tira Safitri',
        jurusan: 'Kimia',
        alamat: 'Ciputat, Tangerang Selatan',
        pengalaman: 'Pengajar tematik SD, IPA SMP dan Bahasa Arab dari tahun 2018'
    },
    {
        nama: 'Baywcksn',
        jurusan: 'Sistem Informasi',
        alamat: 'Cikupa, Tangerang',
        pengalaman: 'Pengajar pemrograman walau dalam mimpi'
    },
    {
        nama: 'Akubaru risuki',
        jurusan: 'Cinta Menggelora',
        alamat: 'Gatau, Daerah JakSel ae',
        pengalaman: 'Pengajar bucin-bucin agar segera menjadi fakboi'
    },
    {
        nama: 'Rijuki Rama',
        jurusan: 'Segala Bidang',
        alamat: 'Hmm, Depan TMII pokoknya',
        pengalaman: 'Pengejar kebahagiaan lewat kekesalan'
    },
    {
        nama: 'Hanifu',
        jurusan: 'Perkosan',
        alamat: 'Ciputat, TangSel (yoman bener)',
        pengalaman: 'Pengajar berbudidaya ketika bertamu di kosan orang'
    },
    {
        nama: '2Ayu Tira Safitri',
        jurusan: 'Kimia',
        alamat: 'Ciputat, Tangerang Selatan',
        pengalaman: 'Pengajar tematik SD, IPA SMP dan Bahasa Arab dari tahun 2018'
    },
    {
        nama: 'Baywcksn',
        jurusan: 'Sistem Informasi',
        alamat: 'Cikupa, Tangerang',
        pengalaman: 'Pengajar pemrograman walau dalam mimpi'
    },
    {
        nama: 'Akubaru risuki',
        jurusan: 'Cinta Menggelora',
        alamat: 'Gatau, Daerah JakSel ae',
        pengalaman: 'Pengajar bucin-bucin agar segera menjadi fakboi'
    },
    {
        nama: 'Rijuki Rama',
        jurusan: 'Segala Bidang',
        alamat: 'Hmm, Depan TMII pokoknya',
        pengalaman: 'Pengejar kebahagiaan lewat kekesalan'
    },
    {
        nama: 'Hanifu',
        jurusan: 'Perkosan',
        alamat: 'Ciputat, TangSel (yoman bener)',
        pengalaman: 'Pengajar berbudidaya ketika bertamu di kosan orang'
    },
    {
        nama: '3Ayu Tira Safitri',
        jurusan: 'Kimia',
        alamat: 'Ciputat, Tangerang Selatan',
        pengalaman: 'Pengajar tematik SD, IPA SMP dan Bahasa Arab dari tahun 2018'
    },
    {
        nama: 'Baywcksn',
        jurusan: 'Sistem Informasi',
        alamat: 'Cikupa, Tangerang',
        pengalaman: 'Pengajar pemrograman walau dalam mimpi'
    },
    {
        nama: 'Akubaru risuki',
        jurusan: 'Cinta Menggelora',
        alamat: 'Gatau, Daerah JakSel ae',
        pengalaman: 'Pengajar bucin-bucin agar segera menjadi fakboi'
    },
    {
        nama: 'Rijuki Rama',
        jurusan: 'Segala Bidang',
        alamat: 'Hmm, Depan TMII pokoknya',
        pengalaman: 'Pengejar kebahagiaan lewat kekesalan'
    },
    {
        nama: 'data-30Hanifu',
        jurusan: 'Perkosan',
        alamat: 'Ciputat, TangSel (yoman bener)',
        pengalaman: 'Pengajar berbudidaya ketika bertamu di kosan orang'
    },

    {
        nama: 'Ayu Tira Safitri',
        jurusan: 'Kimia',
        alamat: 'Ciputat, Tangerang Selatan',
        pengalaman: 'Pengajar tematik SD, IPA SMP dan Bahasa Arab dari tahun 2018'
    },
    {
        nama: 'Baywcksn',
        jurusan: 'Sistem Informasi',
        alamat: 'Cikupa, Tangerang',
        pengalaman: 'Pengajar pemrograman walau dalam mimpi'
    },
    {
        nama: 'Akubaru risuki',
        jurusan: 'Cinta Menggelora',
        alamat: 'Gatau, Daerah JakSel ae',
        pengalaman: 'Pengajar bucin-bucin agar segera menjadi fakboi'
    },
    {
        nama: 'Rijuki Rama',
        jurusan: 'Segala Bidang',
        alamat: 'Hmm, Depan TMII pokoknya',
        pengalaman: 'Pengejar kebahagiaan lewat kekesalan'
    },
    {
        nama: 'Hanifu',
        jurusan: 'Perkosan',
        alamat: 'Ciputat, TangSel (yoman bener)',
        pengalaman: 'Pengajar berbudidaya ketika bertamu di kosan orang'
    },
    {
        nama: '2Ayu Tira Safitri',
        jurusan: 'Kimia',
        alamat: 'Ciputat, Tangerang Selatan',
        pengalaman: 'Pengajar tematik SD, IPA SMP dan Bahasa Arab dari tahun 2018'
    },
    {
        nama: 'Baywcksn',
        jurusan: 'Sistem Informasi',
        alamat: 'Cikupa, Tangerang',
        pengalaman: 'Pengajar pemrograman walau dalam mimpi'
    },
    {
        nama: 'Akubaru risuki',
        jurusan: 'Cinta Menggelora',
        alamat: 'Gatau, Daerah JakSel ae',
        pengalaman: 'Pengajar bucin-bucin agar segera menjadi fakboi'
    },
    {
        nama: 'Rijuki Rama',
        jurusan: 'Segala Bidang',
        alamat: 'Hmm, Depan TMII pokoknya',
        pengalaman: 'Pengejar kebahagiaan lewat kekesalan'
    },
    {
        nama: 'Hanifu',
        jurusan: 'Perkosan',
        alamat: 'Ciputat, TangSel (yoman bener)',
        pengalaman: 'Pengajar berbudidaya ketika bertamu di kosan orang'
    },
    {
        nama: '3Ayu Tira Safitri',
        jurusan: 'Kimia',
        alamat: 'Ciputat, Tangerang Selatan',
        pengalaman: 'Pengajar tematik SD, IPA SMP dan Bahasa Arab dari tahun 2018'
    },
    {
        nama: 'Baywcksn',
        jurusan: 'Sistem Informasi',
        alamat: 'Cikupa, Tangerang',
        pengalaman: 'Pengajar pemrograman walau dalam mimpi'
    },
    {
        nama: 'Akubaru risuki',
        jurusan: 'Cinta Menggelora',
        alamat: 'Gatau, Daerah JakSel ae',
        pengalaman: 'Pengajar bucin-bucin agar segera menjadi fakboi'
    },
    {
        nama: 'Rijuki Rama',
        jurusan: 'Segala Bidang',
        alamat: 'Hmm, Depan TMII pokoknya',
        pengalaman: 'Pengejar kebahagiaan lewat kekesalan'
    },
    {
        nama: 'data-45Hanifu',
        jurusan: 'Perkosan',
        alamat: 'Ciputat, TangSel (yoman bener)',
        pengalaman: 'Pengajar berbudidaya ketika bertamu di kosan orang'
    },
    {
        nama: 'Ayu Tira Safitri',
        jurusan: 'Kimia',
        alamat: 'Ciputat, Tangerang Selatan',
        pengalaman: 'Pengajar tematik SD, IPA SMP dan Bahasa Arab dari tahun 2018'
    },
    {
        nama: 'Baywcksn',
        jurusan: 'Sistem Informasi',
        alamat: 'Cikupa, Tangerang',
        pengalaman: 'Pengajar pemrograman walau dalam mimpi'
    },
    {
        nama: 'Akubaru risuki',
        jurusan: 'Cinta Menggelora',
        alamat: 'Gatau, Daerah JakSel ae',
        pengalaman: 'Pengajar bucin-bucin agar segera menjadi fakboi'
    },
    {
        nama: 'Rijuki Rama',
        jurusan: 'Segala Bidang',
        alamat: 'Hmm, Depan TMII pokoknya',
        pengalaman: 'Pengejar kebahagiaan lewat kekesalan'
    },
    {
        nama: 'Hanifu',
        jurusan: 'Perkosan',
        alamat: 'Ciputat, TangSel (yoman bener)',
        pengalaman: 'Pengajar berbudidaya ketika bertamu di kosan orang'
    },
    {
        nama: '2Ayu Tira Safitri',
        jurusan: 'Kimia',
        alamat: 'Ciputat, Tangerang Selatan',
        pengalaman: 'Pengajar tematik SD, IPA SMP dan Bahasa Arab dari tahun 2018'
    },
    {
        nama: 'Baywcksn',
        jurusan: 'Sistem Informasi',
        alamat: 'Cikupa, Tangerang',
        pengalaman: 'Pengajar pemrograman walau dalam mimpi'
    },
    {
        nama: 'Akubaru risuki',
        jurusan: 'Cinta Menggelora',
        alamat: 'Gatau, Daerah JakSel ae',
        pengalaman: 'Pengajar bucin-bucin agar segera menjadi fakboi'
    },
    {
        nama: 'Rijuki Rama',
        jurusan: 'Segala Bidang',
        alamat: 'Hmm, Depan TMII pokoknya',
        pengalaman: 'Pengejar kebahagiaan lewat kekesalan'
    },
    {
        nama: 'Hanifu',
        jurusan: 'Perkosan',
        alamat: 'Ciputat, TangSel (yoman bener)',
        pengalaman: 'Pengajar berbudidaya ketika bertamu di kosan orang'
    },
    {
        nama: '3Ayu Tira Safitri',
        jurusan: 'Kimia',
        alamat: 'Ciputat, Tangerang Selatan',
        pengalaman: 'Pengajar tematik SD, IPA SMP dan Bahasa Arab dari tahun 2018'
    },
    {
        nama: 'Baywcksn',
        jurusan: 'Sistem Informasi',
        alamat: 'Cikupa, Tangerang',
        pengalaman: 'Pengajar pemrograman walau dalam mimpi'
    },
    {
        nama: 'Akubaru risuki',
        jurusan: 'Cinta Menggelora',
        alamat: 'Gatau, Daerah JakSel ae',
        pengalaman: 'Pengajar bucin-bucin agar segera menjadi fakboi'
    },
    {
        nama: 'Rijuki Rama',
        jurusan: 'Segala Bidang',
        alamat: 'Hmm, Depan TMII pokoknya',
        pengalaman: 'Pengejar kebahagiaan lewat kekesalan'
    },
    {
        nama: 'data-60Hanifu',
        jurusan: 'Perkosan',
        alamat: 'Ciputat, TangSel (yoman bener)',
        pengalaman: 'Pengajar berbudidaya ketika bertamu di kosan orang'
    },
    {
        nama: 'data-45Hanifu',
        jurusan: 'Perkosan',
        alamat: 'Ciputat, TangSel (yoman bener)',
        pengalaman: 'Pengajar berbudidaya ketika bertamu di kosan orang'
    },
    {
        nama: 'Ayu Tira Safitri',
        jurusan: 'Kimia',
        alamat: 'Ciputat, Tangerang Selatan',
        pengalaman: 'Pengajar tematik SD, IPA SMP dan Bahasa Arab dari tahun 2018'
    },
    {
        nama: 'Baywcksn',
        jurusan: 'Sistem Informasi',
        alamat: 'Cikupa, Tangerang',
        pengalaman: 'Pengajar pemrograman walau dalam mimpi'
    },
    {
        nama: 'Akubaru risuki',
        jurusan: 'Cinta Menggelora',
        alamat: 'Gatau, Daerah JakSel ae',
        pengalaman: 'Pengajar bucin-bucin agar segera menjadi fakboi'
    },
    {
        nama: 'Rijuki Rama',
        jurusan: 'Segala Bidang',
        alamat: 'Hmm, Depan TMII pokoknya',
        pengalaman: 'Pengejar kebahagiaan lewat kekesalan'
    },
    {
        nama: 'Hanifu',
        jurusan: 'Perkosan',
        alamat: 'Ciputat, TangSel (yoman bener)',
        pengalaman: 'Pengajar berbudidaya ketika bertamu di kosan orang'
    },
    {
        nama: '2Ayu Tira Safitri',
        jurusan: 'Kimia',
        alamat: 'Ciputat, Tangerang Selatan',
        pengalaman: 'Pengajar tematik SD, IPA SMP dan Bahasa Arab dari tahun 2018'
    },
    {
        nama: 'Baywcksn',
        jurusan: 'Sistem Informasi',
        alamat: 'Cikupa, Tangerang',
        pengalaman: 'Pengajar pemrograman walau dalam mimpi'
    },
    {
        nama: 'Akubaru risuki',
        jurusan: 'Cinta Menggelora',
        alamat: 'Gatau, Daerah JakSel ae',
        pengalaman: 'Pengajar bucin-bucin agar segera menjadi fakboi'
    },
    {
        nama: 'Rijuki Rama',
        jurusan: 'Segala Bidang',
        alamat: 'Hmm, Depan TMII pokoknya',
        pengalaman: 'Pengejar kebahagiaan lewat kekesalan'
    },
    {
        nama: 'Hanifu',
        jurusan: 'Perkosan',
        alamat: 'Ciputat, TangSel (yoman bener)',
        pengalaman: 'Pengajar berbudidaya ketika bertamu di kosan orang'
    },
    {
        nama: '3Ayu Tira Safitri',
        jurusan: 'Kimia',
        alamat: 'Ciputat, Tangerang Selatan',
        pengalaman: 'Pengajar tematik SD, IPA SMP dan Bahasa Arab dari tahun 2018'
    },

];

let numberData = [{
        nama: 'agung',
        umur: 23
    },
    {
        nama: 'wisnu',
        umur: 20
    },
    {
        nama: 'budi',
        umur: 29
    },
    {
        nama: 'firman',
        umur: 18
    },
    {
        nama: 'deni',
        umur: 30
    }
]

// for (let person of data) {
//     console.log(person.nama);
// }
// console.log(numberData.sort((a, b) => a['nama'].localeCompare(b['nama'])));

// Variables
const table = document.querySelector('table');
const btnContainer = document.querySelector('.btn-wrapper');
const tbody = document.querySelector('tbody');

// Additions
let numberOfRows = 8;
let btnCounter = parseInt(Math.ceil(data.length / numberOfRows));
let start = 1;
let end = numberOfRows;
let tempData = data.slice(start - 1, end);
let dataCounter = start;
let btnStart = 0;
let btnEnd = btnStart + 5;
let btnMiddle = btnStart + 2;
let counter = 0;
let isNamaSorted = false;
let isJurusanSorted = false;
let isAlamatSorted = false;
let isPengalamanSorted = false;

// Functions
const injectTable = (data) => {
    tbody.innerHTML = '';

    for (let i = 1; i <= data.length; i++) {

        const tr = document.createElement('tr');
        tr.style.opacity = '0';
        tr.style.animation = `fadeInTable 0.5s ease-in-out forwards ${i * 0.02}s`;
        tr.innerHTML =
            //    <td class="data">${dataCounter}</td>
            `    <td class="data">${data[i - 1].nama}</td>
                <td class="data">${data[i - 1].jurusan}</td>
                <td class="data">${data[i - 1].alamat}</td>
                <td class="data">${data[i - 1].pengalaman}</td>
            `;
        dataCounter++;
        tbody.appendChild(tr);
    }
    // console.log(btnStart, btnEnd);
}

const paginationButton = () => {
    btnContainer.innerHTML = '';

    for (let i = 0; i < btnCounter; i++) {
        const button = document.createElement('button');

        button.innerText = i + 1;

        if (i == btnStart) {
            button.classList.add('btn-start');
        } else if (i == btnEnd - 1) {
            button.classList.add('btn-end');
            button.innerText += '..';
        }

        btnContainer.appendChild(button);
    }

}



const paging = (index) => {
    const buttonSelect = document.querySelectorAll('button');
    buttonSelect[index].classList.add('active');

    btnContainer.onclick = e => {
        if (e.target.classList[0] !== 'btn-wrapper') {
            for (let i = 0; i < buttonSelect.length; i++) {
                buttonSelect[i].classList.remove('active');
            }

            let whereBtnClicked = parseInt(e.target.innerText);

            start = ((whereBtnClicked - 1) * numberOfRows) + 1;
            end = numberOfRows * whereBtnClicked;
            dataCounter = start;

            tempData = data.slice(start - 1, end);
            injectTable(tempData);
            buttonSelect[whereBtnClicked].classList.add('active');

            if (e.target.classList[0] == 'btn-end') {
                btnStart += 2;
                btnEnd += 2;
                counter++;
                paginationButton();
                paging(btnStart + 3);
                btnContainer.style.transform = `translateX(${-80 * counter}px)`;
            } else if (e.target.classList[0] == 'btn-start' && e.target.innerText != 1) {
                btnStart -= 2;
                btnEnd -= 2;
                counter--;
                paginationButton();
                paging(btnStart + 3);
                btnContainer.style.transform = `translateX(${-80 * counter}px)`;
                buttonSelect[whereBtnClicked].classList.add('active');
            }

        }
    }

    const firstLastContainer = document.querySelector('.pagination-btn');

    firstLastContainer.onclick = e => {
        if (e.target.classList[0] == 'first') {
            start = 1;
            end = numberOfRows;
            tempData = data.slice(start - 1, end);
            injectTable(tempData);
            btnStart = 0;
            btnEnd = btnStart + 5;
            paginationButton();
            paging(btnStart + 1)
            counter = 0;
            btnContainer.style.transform = `translateX(${0 * counter}px)`;

        } else if (e.target.classList[0] == 'last') {
            if (data.length % numberOfRows == 0) {
                start = data.length - numberOfRows;
            } else {
                start = data.length - data.length % numberOfRows + 1;
            }
            end = data.length;
            tempData = data.slice(start - 1, end);
            btnStart = 3 + Math.floor(btnCounter / 3);
            btnEnd = btnStart + 5;
            counter = Math.floor(btnCounter / 3);
            btnContainer.style.transform = `translateX(${-80 * counter}px)`;
            tempData = data.slice(start, end);
            injectTable(tempData);
            paginationButton();
            paging(btnCounter)
        }
    }
}

// const sortColumn = (columnName, isSort) => {
//     isAscending = !isAscending;
//     if (isSort) {
//         sort = false;
//     } else {
//         sort = true;
//     }


//     data.sort((a, b) => isAscending ? a[columnName].localeCompare(b[columnName]) : b[columnName].localeCompare(a[columnName]))

//     tempData = data.slice(start - 1, end);
//     injectTable(tempData);

//     isSort = !isSort;
// }

const sortColumn = () => {
    const thead = document.querySelector('thead');

    thead.onclick = e => {

        switch (e.target.innerText) {
            case 'Nama Pengajar':
                data.sort((a, b) => !isNamaSorted ? a['nama'].localeCompare(b['nama']) : b['nama'].localeCompare(a['nama']))
                tempData = data.slice(start - 1, end);
                injectTable(tempData);
                isNamaSorted = !isNamaSorted;
                isJurusanSorted = false;
                isPengalamanSorted = false;
                isAlamatSorted = false;
                break;

            case 'Jurusan':
                data.sort((a, b) => !isJurusanSorted ? a['jurusan'].localeCompare(b['jurusan']) : b['jurusan'].localeCompare(a['jurusan']))
                tempData = data.slice(start - 1, end);
                injectTable(tempData);
                isJurusanSorted = !isJurusanSorted;
                isNamaSorted = false;
                isPengalamanSorted = false;
                isAlamatSorted = false;
                break;

            case 'Alamat':
                data.sort((a, b) => !isAlamatSorted ? a['alamat'].localeCompare(b['alamat']) : b['alamat'].localeCompare(a['alamat']))
                tempData = data.slice(start - 1, end);
                injectTable(tempData);
                isAlamatSorted = !isAlamatSorted;
                isPengalamanSorted = false;
                isJurusanSorted = false;
                isNamaSorted = false;
                break;

            case 'Pengalaman':
                data.sort((a, b) => !isPengalamanSorted ? a['pengalaman'].localeCompare(b['pengalaman']) : b['pengalaman'].localeCompare(a['pengalaman']))
                tempData = data.slice(start - 1, end);
                injectTable(tempData);
                isPengalamanSorted = !isPengalamanSorted;
                isAlamatSorted = false;
                isJurusanSorted = false;
                isNamaSorted = false;
                break;

            default:
                break;
        }
        console.log(isNamaSorted, isJurusanSorted, isAlamatSorted, isPengalamanSorted);
    }
}

const wrapper = () => {
    injectTable(tempData);
    paginationButton();
    paging(1);
    sortColumn();
}