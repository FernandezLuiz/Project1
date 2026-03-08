'use client';

import React from 'react';

export default function AdminPage() {
  // Dit is een voorbeeld van data die normaal uit je 'logs' komt
  const mockLogs = [
    { id: 1, page: "/home", time: "10:05", action: "View" },
    { id: 2, page: "/projects", time: "10:07", action: "Click: Project 1" },
    { id: 3, page: "/contact", time: "10:10", action: "Form Start" },
  ];

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f0f0f0', minHeight: '100vh', color: '#000' }}>
      <h1>Admin Dashboard - Gebruikersgedrag</h1>
      <p>Hieronder zie je de acties die gebruikers op je site hebben uitgevoerd (Log Files).</p>
      
      <table style={{ width: '100%', marginTop: '1rem', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ textAlign: 'left', borderBottom: '2px solid #000' }}>
            <th>Tijd</th>
            <th>Pagina</th>
            <th>Actie</th>
          </tr>
        </thead>
        <tbody>
          {mockLogs.map(log => (
            <tr key={log.id} style={{ borderBottom: '1px solid #ccc' }}>
              <td>{log.time}</td>
              <td>{log.page}</td>
              <td>{log.action}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid red' }}>
        <h3>Inzicht voor de opdracht (UR4):</h3>
        <p>Op basis van deze logs zie ik dat gebruikers na 2 minuten van de homepagina naar projecten gaan. Dit is een <strong>observatie</strong>.</p>
      </div>
    </div>
  );
}