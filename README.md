GearItDone
==========

Gear It Done! is a tool to design gear trains. Exports to DXF and STL for lasercuting, machining, or 3D printing.

Project Goal(s)
---------------

This is my current gear train design pipeline:

    Excel -> Gear Generator -> DXF -> AutoCAD -> Inkscape -> DXF (for laser cutting)
                                  \-> OpenSCAD -> STL (for animating in Blender)
                                  
This is my goal:

    JSON Parameters -> 3D Preview -> laser ready DXF and STL models

I will accomplish this by using Node and CoffeeScript and all the goodness, and libraries like:
* [OpenJsCad](https://github.com/joostn/OpenJsCad) by Joost Nieuwenhuijse for computational area / solid geometry
* [gearUtils](http://www.arc.id.au/GearDrawing.html) by Dr A.R.Collins for better looking involute gears

Usage
-----
Ha ha. Let me invent it first, then I'll document how it works. :smile:
