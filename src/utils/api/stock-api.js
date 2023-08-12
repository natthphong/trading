const basePath = "http://localhost:9081/v1";

const token = "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRhcjJAZW1haWwuY29tIn0.f2sNkqgelxjLisdQ49QoBSPoq1BsRSQUCwEjUJfZA9xPqpQwn-h1JyBJURnCoRa_brYMXu-Y2-2tyKFJ8nREaA"

export const fetchStockDetails = async () => {
  const headers = {
    Authorization: token
  };
  
  const url = `${basePath}/customer/stock`;
  const response = await fetch(url,{
    method: 'GET',
    headers: headers
  });
  if (response.status!== 200) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};


export const fetchTopUp= async () => {
  const headers = {
    Authorization: token
  };
  
  const url = `${basePath}/customer/topup`;
  const response = await fetch(url,{
    method: 'GET',
    headers: headers
  });
  console.log(url)

 var  body = await response.json()
 console.log(body)
  if (body.message=== "it's not time to request") {
    const message = `it's not time to request wait : ${body.countDownRequestMoneyTime}s `;
    alert(message)
  }

  if (response.status!== 200) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
 

  return body;
};

