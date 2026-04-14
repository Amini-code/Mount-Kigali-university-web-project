let numVisits = localStorage.getItem('numVisits') || 0;

numVisits++;
localStorage.setItem('numVisits', numVisits);