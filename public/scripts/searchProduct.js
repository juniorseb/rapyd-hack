async function searchProducts(product) {
     let response;
     try {
      response = await fetch('/products/search', {
        method: 'POST',
        body: JSON.stringify({
          search: product
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      alert('Something went wrong!');
      return;
    }
  
    if (!response.ok) {
      alert('Something went wrong!');
     
      return;
    } 
  
    const responseData = await response.json();
    console.log(responseData);
    document.getElementById('prodSeen').innerHTML=''
}
  
$('#product-name').on({
    keyup:()=>{
        const value = $("#product-name").val().trim();
        searchProducts(value);
    },
    blur: ()=>{
        $('#product-name').val('')
    }
})