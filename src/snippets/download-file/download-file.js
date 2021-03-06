/**
 * @param {any} data - the date from the form
 * @param {string} filename - desired name for the downloaded file, including extension
 *
 * @description Automatically download a file after completing a form
 *
 * @example
 * downloadFile(data, 'file.pdf');
 *
 * axios({
 *     url: `/new/api/v1`,
 *     method: 'GET',
 *     responseType: 'blob'
 * }).then(({ data }) => {
 *     downloadFile(data, 'report.csv');
 * });
 *
 */

export default function downloadFile (data, filename) {
    const url = window.URL.createObjectURL(new Blob([data]));
    const link = document.createElement('a');

    link.href = url;
    link.setAttribute('download', filename);

    document.body.appendChild(link);
    link.click();
    link.remove();
}
