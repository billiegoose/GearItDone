var gProcessor=null;

// Show all exceptions to the user:
OpenJsCad.AlertUserOfUncaughtExceptions();

function onload()
{
  options = {
    viewerwidth: "400px",
    viewerheight: "300px"
  }
  gProcessor = new OpenJsCad.Processor(document.getElementById("viewer"), options);
  gProcessor.setOpenJsCadPath("lib/OpenJsCad");
  updateSolid();
}

function updateSolid()
{
  gProcessor.setJsCad(document.getElementById('code').value);
}


module = 40.0/12.0;
teeth = 12;
pressureAngle = 20;
a = createGearTooth(module, teeth, pressureAngle);
console.log(a);