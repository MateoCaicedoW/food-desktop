import React, { useEffect } from 'react';
import CustomNotification from './utils/notification.js';
import Dashboard from './components/Dashboard.jsx';
export default function App() {

    window.addEventListener('online', () => {
        
    });

    const notify = () => {
        new CustomNotification('New Message', {
            body: 'Golang is the best programming language'
        });
    }


    return (
        <Dashboard />
    )
}