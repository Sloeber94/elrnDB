# ALFA 159 workshop manual — guide for AI assistants

Read this first. It explains how the manual is organised, what the codes mean and how to use the other files.
Source: the official eLearn workshop manual (English). Web version: https://sloeber94.github.io/elrnDB/

## Always establish the vehicle first
Content differs per engine, production period and equipment. Ask for these before answering and ignore topics
or blocks whose "Applies to" line excludes the car.
- Engines: 1.8, 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V
- Production periods: Up to 12/05, From 01/06
- Equipment options: Station Wagon, 4x4, Right hand drive, C.A.E., High setup, Low setup, Xenon Gas headlamps, Radio setup, BOSE System, Manual Air Conditioning, Automatic Air Conditioning, VDC, Powered sunroof, Connect Nav+, Split rear seat, One-piece rear seat, Bluetooth, Electric seats
  ("Station Wagon" = Sportwagon; "C.A.E." = automatic/robotised gearbox, so manual-gearbox cars exclude C.A.E. pages)
Several topics exist as variants with the same code and title (e.g. one for Station Wagon, one for right-hand drive);
pick the variant whose "Applies to" matches the car.

## Topic format
Each topic is a "## CODE TITLE  [id]" heading followed by Path, Kind, Applies to, Web link and Subtopics.
Links inside the text look like `label [→id]` or `label [→id CODE TITLE]`: search the files for `[id]` to open the target.
Images are referenced as `[image: URL]`; wiring diagrams and location drawings are images only.

## Sections (top level)
- **Technical Data**: technical data / specifications
- **Descriptions**: system description
- **Fault diagnosis**: fault diagnosis table (symptom -> numbered test steps)
- **Test**: test / check procedure
- **Procedures**: repair procedure (removal / refitting, operation number = code)
- **Electrical equipment**: electrical functions, harnesses and connector pinouts

Typical fault-tracing route: Fault diagnosis (symptom table) -> Test (checks) -> Electrical equipment
(functional description, wiring diagram, connector pinouts) -> Procedures (replace the part, by operation number).

## Electrical equipment
- **1 ELECTRICAL FUNCTIONS**: one chapter per function, coded E + 4 digits (e.g. E2022 reversing lights). Each has
  DESCRIPTION, FUNCTIONAL DESCRIPTION (which fuse, pins and components), WIRING DIAGRAM and COMPONENT LOCATION,
  with a component table linking every component to its pinout and repair procedure.
- **Connectors**: one page per component connector with every pin: wire section (mm²), wire colour code and the
  connector/pin at the other end. "via splice" = the wire joins others at a splice (diamond in the diagrams).
- **Wiring**: harness sections (e.g. 12 FRONT, 25 REAR, 27 TAILGATE, 28 BOOT).

Component code families (letter + 3 digits; descriptions often drop the zeros: B2 = B002, F35 = F035):
- A STARTING - RECHARGING
- B VARIOUS FUSE HOLDERS AND VALVES
- C EARTHS
- D INTERMEDIATE COUPLINGS
- E INSTRUMENT PANEL AND INDICATORS
- F EXTERIOR LIGHTS
- G INTERIOR LIGHTS
- H MANUAL ELECTRIC CONTROLS
- I SWITCHES
- J RELAYS
- K SENSORS AND SENDER UNITS
- L ELECTROMAGNETS AND SOLENOID VALVES
- M INTERMITTENT AND TIMED ELECTRONIC DEVICES
- N ELECTRIC MOTORS AND ACTUATORS
- O RESISTANCES AND DIMMERS
- P VARIOUS CONSUMERS
- Q SAFETY DEVICES

Fuses are written F + number inside a fuse box (e.g. "fuse F35 of the junction unit under the dashboard B2").
Do not confuse fuse F35 with lamp F035. See index-fuses.md.

## Wire colour codes
From "Electrical equipment > 1 ELECTRICAL FUNCTIONS > ADDITIONAL INFORMATION > CABLE COLOR CODE > KEY". Two-letter codes: the first letter is the main colour,
the second the stripe (RV = red with green stripe).

| Code | Colour |
| --- | --- |
| N | black |
| B | white |
| A | light blue |
| M | brown |
| G | yellow |
| R | red |
| V | green |
| H | grey |
| S | pink |
| C | orange |
| Z | violet |
| L | blue |

Connector body colours in the pinouts are Italian: BIANCO = white, NERO = black, MARRONE = brown, GRIGIO = grey, AZZURRO = light blue, VERDE = green, ROSSO = red, GIALLO = yellow, BLU = blue, VIOLA = violet, ARANCIO = orange, ROSA = pink, NATURALE = natural.
Common circuit labels: INT = ignition-switched supply, CPL = permanent battery supply, CAN / A-BUS / B-CAN = data lines.

## Files
- 1-technical-data.md
- 2-descriptions.md
- 3-fault-diagnosis.md
- 4-test.md
- 5-procedures.md
- 5-procedures--00-maintenance.md
- 5-procedures--05-diagnostics.md
- 5-procedures--10-engine.md
- 5-procedures--18-clutch-unit.md
- 5-procedures--21-gearbox-unit.md
- 5-procedures--24-transmission.md
- 5-procedures--27-axle.md
- 5-procedures--33-brakes.md
- 5-procedures--41-steering-unit.md
- 5-procedures--44-suspension-and-wheels.md
- 5-procedures--50-auxiliary-units.md
- 5-procedures--55-electrical-equipment.md
- 5-procedures--70-fittings.md
- 5-procedures--72-panels-and-frames.md
- 6-electrical-equipment.md
- index-components.md
- index-operations.md
- index-fuses.md
- index-components.md: component -> pinout pages, wiring diagrams, location drawings, repair procedures
- index-operations.md: operation/test code (Op. 5550D22) -> topic
- index-fuses.md: fuse -> every circuit description that names it
