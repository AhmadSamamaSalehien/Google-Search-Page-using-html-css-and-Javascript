async function search()

    {

        const query = document.getElementById('searchInput').value.trim();

        if (!query) return;

            const resultsContainer = document.getElementById('results');
            resultsContainer.innerHTML = '<p>Loading...</p>';

            const apiKey = 'AIzaSyBTCZBDrgxOYstLSrXisxm23RqfDXPp0Q0';
            const cseId = '66c11f09da19446ce';

            try 
            
                {

                    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cseId}&q=${encodeURIComponent(query)}`);

                    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

                    const data = await response.json();

                    resultsContainer.innerHTML = '';

                    if (data.items && data.items.length > 0)
                        
                        {

                            data.items.forEach(result => {

                                const resultDiv = document.createElement('div');

                                resultDiv.className = 'result';
                                resultDiv.innerHTML = `
                                    <h3><a href="${result.link}" target="_blank">${result.title}</a></h3>
                                    <p class="url">${result.displayLink}</p>
                                    <p>${result.snippet}</p>
                                `;

                                resultsContainer.appendChild(resultDiv);
                    
                            });

                        }
                        
                    else
                        
                        {

                            resultsContainer.innerHTML = '<p>No results found.</p>';
                    
                        }

                } 
                
            catch (error)
            
                {

                    console.error('Error:', error);

                    resultsContainer.innerHTML = '<p>Error fetching results. Please try again.</p>';

                }
    
    }

document.getElementById('searchInput').addEventListener('keypress', (e) => {

    if (e.key === 'Enter') search();
    
});