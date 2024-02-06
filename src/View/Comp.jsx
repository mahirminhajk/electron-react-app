import React, { useEffect } from 'react';

function Comp() {

    useEffect(() => {

        const { ipcRenderer } = window.electron;

        // Listen for success event
        ipcRenderer.on('create-student-success', (event, id) => {
            console.log(event);
            console.log('Student created successfully:', id);
            // Handle success as needed
        });

        // Listen for error event
        ipcRenderer.on('create-student-error', (event, errorMessage) => {
            console.error('Error creating student:', errorMessage);
            // Handle error as needed
        });

        // Clean up event listeners on component unmount
        return () => {
            ipcRenderer.removeAllListeners('create-student-success');
            ipcRenderer.removeAllListeners('create-student-error');
        };
    }, []);


    const handleClicked = async () => {
        await basicInfo.createStudent(
            {
                name: "John",
                age: 20,
            }
        );
    };

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={handleClicked}>log</button>
        </div>
    )
}

export default Comp