async function getData() {
    const url = "https://gj6c1qwlhi.execute-api.us-east-1.amazonaws.com/default/hspd-home";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const text = await response.text();
      document.getElementById("bloco1").innerHTML = text;      
    } catch (error) {
      console.error(error.message);
    }
  }

  getData();