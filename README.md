<!DOCTYPE html>
<html>
  <head>
    <title>Students Details</title>
    
  </head>
  <body>
    <h1>Students Details Form</Details></h1>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" />

      <label for="email">Email:</label>
      <input type="text" id="email" name="email" />

      <label for="phone">Phone:</label>
      <input type="text" id="phone" name="phone" />

      <button type="button" onclick="sendData()">Submit</button>
    </form>

    <script src="index.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.4.0/axios.min.js"></script>
  </body>
</html>
