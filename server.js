import http from "http";
const port = 8000;
const requestHandler = (request, response) => {
console.log(request.url);
response.end("https://stojics1-assignment-45-3076298-stojic.onrender.com");
};
const server = http.createServer(requestHandler);
server.listen(port, (err) => {
if (err) {
return console.log("something bad happened", err);
}
console.log(`server is listening on ${port}`);
});