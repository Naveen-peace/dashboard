import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import Modal from 'react-modal';
import PdfFile from '../../asset/naveen_resume.pdf';
import { Icon } from '@iconify/react';

function PdfDownloader() {
    const [numPages, setNumPages] = useState(null);
    const [modelIsOpen, setModelIsOpen] = useState(false);

    function onDocumentSuccess() {
        setNumPages(numPages);
    }

    function openModel() {
        setModelIsOpen(true);
    }

    function closeModel() {
        setModelIsOpen(false);
    }
    function downloadResume() {
        var link = document.createElement('a');
        link.href = PdfFile;
        link.download = 'Naveen-Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className='naveen-resume'>
            <div className='naveen-resume-newadjust'>
            {/* <button className='naveen-resume-button' onClick={openModel}> <Icon icon="lets-icons:view" width="20" height="20" /> Resume</button> */}
            <button className='naveen-resume-button' onClick={downloadResume}>
                <Icon icon="uil:download-alt" width="20" height="20" />Resume
            </button>
            </div>
            <Modal
            className={'naveen-adjust-resume'}
                isOpen={modelIsOpen}
                onRequestClose={closeModel}
                contentLabel='PDF Modal'
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    },
                    content: {
                        width: '80%',
                        height: '80%',
                        margin: 'auto',
                    },
                }}
            >
                <Document file={PdfFile} onLoadSuccess={onDocumentSuccess}>
                    <Page pageNumber={1} />
                </Document>
                <button className='naveen-resume-close' onClick={closeModel}><Icon icon="zondicons:close-outline" /></button>
            </Modal>
        </div>
    );
}

export default PdfDownloader;
