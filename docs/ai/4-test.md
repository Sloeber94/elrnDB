# Test

## Test  [939010170]
- Path: Test
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010170
- Subtopics: 10 ENGINE [939010171]; 33 BRAKES [939010231]; 44 SUSPENSION AND WHEELS [939010240]; 50 AUXILIARY UNITS [939010259]; 55 ELECTRICAL EQUIPMENT [939010275]; 70 FITTINGS [939010335]

## 10 ENGINE  [939010171]
- Path: Test > 10 ENGINE
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010171
- Subtopics: 1040 FUEL TANK AND PIPES [939010172]; 1048 ENGINE AIR SUPPLY CIRCUIT [939010179]; 1056 PETROL INJECTION SYSTEM [939005358]; 1060 DIESEL INJECTION SYSTEM [939010182]; 1064 ENGINE SUPERCHARGING SYSTEM [939010213]; 1068 ACCELERATOR CONTROLS [939010220]; 1080 EMISSION CONTROL SYSTEM [939010223]

## 1040 FUEL TANK AND PIPES  [939010172]
- Path: Test > 10 ENGINE > 1040 FUEL TANK AND PIPES
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010172
- Subtopics: 1040A FUEL TANK AND COMPONENTS [939010173]; 1040O FUEL TANK AND PIPE TESTS [939010177]

## 1040A FUEL TANK AND COMPONENTS  [939010173]
- Path: Test > 10 ENGINE > 1040 FUEL TANK AND PIPES > 1040A FUEL TANK AND COMPONENTS
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010173
- Subtopics: 1040AA SUPPLY VOLTAGE AND ABSORPTION CURRENT CHECKS [939010174]; 1040AC FUEL LEVEL GAUGE CHECK [939010175]; 1040AB SUBMERGED FUEL PUMP CHECK [939010176]; 1040AC FUEL LEVEL GAUGE CHECK [939005261]; 1040AD FUEL PUMP RELAY CHECK [939005353]; 1040AE FUEL QUALITY CHECK [939005354]; 1040AC FUEL LEVEL GAUGE CHECK [939005355]

## 1040AA SUPPLY VOLTAGE AND ABSORPTION CURRENT CHECKS  [939010174]
- Path: Test > 10 ENGINE > 1040 FUEL TANK AND PIPES > 1040A FUEL TANK AND COMPONENTS > 1040AA SUPPLY VOLTAGE AND ABSORPTION CURRENT CHECKS
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010174

##### Refitting
Check that the pump supply voltage at the pump connector is 12V
Measure the pump absorption current by positioning the ammeter clip for the diagnostic equipment on the pump supply cable (at the fuse box or directly on the pump inlet cable)
See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133]
The current measured should be between 2 and 10 Amperes.

## 1040AC FUEL LEVEL GAUGE CHECK  [939010175]
- Path: Test > 10 ENGINE > 1040 FUEL TANK AND PIPES > 1040A FUEL TANK AND COMPONENTS > 1040AC FUEL LEVEL GAUGE CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010175

Disconnect the connection from the fuel intake assembly.
Connect using an Examiner in Ohmmeter mode to the connection for the fuel intake assembly at pins 5 and 6
Read a resistance proportional to the level of the fuel as illustrated in the table below
> Note: the tolerance of the measured resistance value is approximately 5%
| Fuel quantity [litres] | Resistance value [ohm] |
| --- | --- |
| 62 | >5 |
| 54 | 73 |
| 46 | 107 |
| 38 | 133 |
| 31 | 159 |
| 23 | 186 |
| 15 | 216 |
| 8 (riserve) | 248 |
| 1 | 300 |
The following figure shows the fuel pump assembly
[image: https://sloeber94.github.io/elrnDB/media/939003473.jpg]

## 1040AB SUBMERGED FUEL PUMP CHECK  [939010176]
- Path: Test > 10 ENGINE > 1040 FUEL TANK AND PIPES > 1040A FUEL TANK AND COMPONENTS > 1040AB SUBMERGED FUEL PUMP CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010176

| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Press the START/STOP button and turn off the engine. Disconnect the wiring harness connector from engine control unit connector A Connect a shunt cable with fuse between pin 28 of control unit connector A See M010 ENGINE MANAGEMENT ECU [→939004314] and the battery positive See A001 BATTERY [→939004879] and check that the fuel pump does not activate | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |
| 2 | In the engine bay junction unit, remove relay T10 from the base (it is the second from left in the bottom row). Measure the voltage between Pin 86 of the base unit and Earth, ensuring it is greater than 11 V. | If faults are found, restore the wiring between the engine control unit and the under-dashboard junction unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] otherwise replace the junction unit Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] |
| 3 | Measure the voltage between Pins 85 and 86 of the base unit, ensuring it is greater than 11 V. | If faults are found, restore the wiring between the under-dashboard junction unit and earth See E1020 EARTHS - DESCRIPTION [→939003314] otherwise replace the junction unit Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] |
| 4 | Disconnect the shunt connection. Press the START/STOP button. Measure the voltage between Pin 30 of the base unit and Earth, ensuring it is greater than 11 V. Move on to Step 8 | Move on to Step 5 |
| 5 | Press the START/STOP button. In the engine compartment junction unit remove fuse F21 from the base unit (it is the third from the left in the bottom row). Press the START/STOP button. Measure the voltage between the fuse input contact and earth, checking it is less than 11 V | Replace the junction unit Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] |
| 6 | Press the START/STOP button. Disconnect the wiring harness connector from engine control unit connector A Press the START/STOP button. Measure the voltage across Pin 16 of control unit connector A See B001 JUNCTION UNIT [→939003748] and Earth, checking it is less than 11 V | Replace the junction unit Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] |
| 7 | Press the START/STOP button. Restore the wiring between the under-dashboard junction unit and the engine compartment junction unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] The test can be considered over |  |
| 8 | Connect the shunt connection lead without a fuse between Pins 30 and 87 of the base unit and check that the fuel pump does not come on | Replace the fuel pump assembly **Op. 1060G88 DIESEL INJECTION SYSTEM RELAYS - R R** |
| 9 | Disconnect the wiring harness connector from the fuel pump Measure the voltage between pump Pin 4 See N040 FUEL PUMP AND LEVEL GAUGE [→939004413] and Earth, checking it is greater than 11 V | If faults are found, restore the wiring between the under-dashboard junction unit and the fuel pump See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] otherwise replace the junction unit Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] |
| 10 | Check the wiring between the fuel pump and earth See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] and restore if necessary | Replace the fuel pump Op. 1040A70 SUBMERGED PUMP ASSEMBLY COMPLETE WITH LEVEL GAUGE CONTROL - R + R [→939010496] |

## 1040AC FUEL LEVEL GAUGE CHECK  [939005261]
- Path: Test > 10 ENGINE > 1040 FUEL TANK AND PIPES > 1040A FUEL TANK AND COMPONENTS > 1040AC FUEL LEVEL GAUGE CHECK
- Kind: test / check procedure
- Applies to: engines: 1.8, 1.9 JTS, 2.2 JTS; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005261

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Check the fuel level signalled by the gauge in the panel and make a note of it. Connect to the pump connector See N040 FUEL PUMP AND LEVEL GAUGE [→939004413] between Pins A and C and check that the resistance reading is consistent with the reading in the panel, following the instructions in the table below | Move on to Step 6 |
| Level | Full | 3/4 | 1/2 | 1/4 | Reserve | Empty |
| --- | --- | --- | --- | --- | --- | --- |
| Resistance (Ohm) | 17÷23 | 78÷84 | 136÷142 | 207÷213 | 244÷250,1 | 296,7÷303,5 |
|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 2 | Lift up the pump from the tank, checking that the electrical connection and the pipes are correctly connected | Restore the correct electrical and hydraulic connections |
| 3 | Extract the pump from the tank, taking care to disconnect the electrical connection and the pipe. Place the pump on a horizontal surface and short circuit the connection that goes to the disconnected sensor. Check the consistency between the resistance measured at the pump and the height at which the base of the gauge float finds itself referring to the table below. The test is over | Move on to Step 4 |
| Height (mm) | 163,9÷171,2 | 128,6÷132,6 | 94,9÷98,9 | 53,3÷57,3 | 31,5÷35,5 | 1÷5 |
| --- | --- | --- | --- | --- | --- | --- |
| Resistance (Ohm) | 17÷23 | 78÷84 | 136÷142 | 207÷213 | 244÷250,1 | 296,7÷303,5 |
|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 4 | The level gauge may be fitted incorrectly. Refit the level gauge and move on to Step 3. If the fault persists, replace the gauge |  |
| 5 | Check that the reading is not consistent. The test is over | Replace the fuel pump assembly Op. 1040A70 SUBMERGED PUMP ASSEMBLY COMPLETE WITH LEVEL GAUGE CONTROL - R + R [→939010496] |
| 6 | Carry out the active diagnosis of the fuel level gauge in the instrument panel, checking that the pointer can complete the entire stroke throughout the scale | Replace the instrument panel Op. 5560B10 CONTROL PANEL - R+R [→939011063] or Op. 5560C51 COMBINED ANALOGUE CONTROL PANEL - R+R OR REPLACE [→939011066] |
| 7 | Check that the wiring between Pin 1 of the gauge See N040 FUEL PUMP AND LEVEL GAUGE [→939004413] and Pin 4 of connector D of the Body Computer See M001 BODY COMPUTER [→939004296] does not have continuity or insulation faults | Restore or, if necessary, replace the wiring See E5030 PETROL ENGINES ELECTRONIC MANAGEMENT [→939004361] |
| 8 | Check that the wiring between Pin 2 of the gauge See N040 FUEL PUMP AND LEVEL GAUGE [→939004413] and Pin 15 of connector D of the Body Computer See M001 BODY COMPUTER [→939004296] does not have continuity or insulation faults | Restore or, if necessary, replace the wiring See E5030 PETROL ENGINES ELECTRONIC MANAGEMENT [→939004361] |
| 9 | Check that the connector for the guage See N040 FUEL PUMP AND LEVEL GAUGE [→939004413] does not show signs of oxidation, deformation or breaks in the pins |  |

## 1040AD FUEL PUMP RELAY CHECK  [939005353]
- Path: Test > 10 ENGINE > 1040 FUEL TANK AND PIPES > 1040A FUEL TANK AND COMPONENTS > 1040AD FUEL PUMP RELAY CHECK
- Kind: test / check procedure
- Applies to: engines: 1.8, 1.9 JTS, 2.2 JTS, 3.2 JTS; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005353

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Insert the ignition key (panel on). Check that there is a whilstling noise in the next 2 seconds coming from the fuel pump indicating that it is activated and then the pump should be deactivated. The test can be considered over | Move on to Step 2 |
| 2 | With the diagnostic equipment in active diagnosis carry out the active diagnosis of the fuel pump relay checking that the result is positive Move on to Step 4 | Move on to Step 3 |
| 3 | If faults are present, repair or, if necessary, replace the electrical wiring between the engine management control unit and the engine compartment junction unit. See E5030 PETROL ENGINES ELECTRONIC MANAGEMENT [→939004361] The test can be considered over | Replace the fuel pump relay |
| 4 | Press the START/STOP button (panel off). Connect a pressure gauge to the injectors. Press the START/STOP button (panel on). Check that the fuel pressure rises (whilst the pump is working) between 5.7 and 6.3 bar, then slowly decreases and returns to the previous value. Move on to Step 7 | Move on to Step 5 |
| 5 | Press the START/STOP button (panel off). Remove the fuel pump relay T10 in the engine compartment junction unit. Press the START/STOP button (panel on). Check that the fuel pressure continues not to decrease | Replace the fuel pump relay |
| 6 | If faults are present, repair or, if necessary, replace the electrical wiring between the fuel pump and the engine compartment junction unit. See E5030 PETROL ENGINES ELECTRONIC MANAGEMENT [→939004361] The test can be considered over | Replace the engine compartment junction unit Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] |
| 7 | Press the START/STOP button (panel off). Remove fuse F21 in the engine compartment junction unit and check that it has not blown. Move on to Step 12 | Move on to Step 8 |
| 8 | Fit a new F21 fuse. Disconnect the connector at the fuel pump See N040 FUEL PUMP AND LEVEL GAUGE [→939004413] and check that there are no short circuits | Restore or, if necessary, replace the electrical wiring See E5030 PETROL ENGINES ELECTRONIC MANAGEMENT [→939004361] |
| 9 | Check the electrical wiring between the fuel pump and the engine compartment junction unit See E5030 PETROL ENGINES ELECTRONIC MANAGEMENT [→939004361] making sure there are no faults present | Restore or, if necessary, replace the electrical wiring See E5030 PETROL ENGINES ELECTRONIC MANAGEMENT [→939004361] |
| 10 | Press the START/STOP button (panel on). Check that the fuel pressure increases and that fuse F21 intervenes | The circuit between the engine compartment junction unit and the fuel pump has been overloaded: check the wiring See E5030 PETROL ENGINES ELECTRONIC MANAGEMENT [→939004361] |
| 11 | If faults are present, repair or if necessary replace the electrical wiring for the fuel pump. See E5030 PETROL ENGINES ELECTRONIC MANAGEMENT [→939004361] Check, amongst other things, that the connectors do not show signs of corrosion or damage. The test can be considered over | Replace the fuel pump assembly Op. 1040A70 SUBMERGED PUMP ASSEMBLY COMPLETE WITH LEVEL GAUGE CONTROL - R + R [→939010496] |
| 12 | Press the START/STOP button (panel off). Remove the fuel pump relay T10 in the engine compartment junction unit. Press the START/STOP button (panel on). Check the power supply at the base of relay T10 is not faulty | Restore or, if necessary, replace the electrical wiring See E5030 PETROL ENGINES ELECTRONIC MANAGEMENT [→939004361] |
| 13 | Connect a cable and bridge with a 15 A fuse between the battery positive See A001 BATTERY [→939004879] and Pin B of the pump See N040 FUEL PUMP AND LEVEL GAUGE [→939004413] Check that the fuel pressure increases and the pump is activated. Move on to Step 3 | Move on to Step 11 |

## 1040AE FUEL QUALITY CHECK  [939005354]
- Path: Test > 10 ENGINE > 1040 FUEL TANK AND PIPES > 1040A FUEL TANK AND COMPONENTS > 1040AE FUEL QUALITY CHECK
- Kind: test / check procedure
- Applies to: engines: 1.8, 1.9 JTS, 2.2 JTS, 3.2 JTS; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005354

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Remove the pump from the fuel tank and draw the fuel from the bottom of the tank. Fill a 100 ml glass cylinder with 1 ml graduations with this fuel to the 90 ml level. Add 10 ml of water to reach the 100 ml level and close the cover. Shake the cylinder vigorously for 10-15 seconds, then remove the cover paying attention: some of the alcohol vapours naturally present in the fuel will escape. Close the cover and shake the cylinder again for 10-15 seconds. Leave the cylinder to rest on a horizontal surface for about 5 minutes to allow the liquids to separate |  |
| 2 | Check that there is not a liquid layer in the lower part of the cylinder (colloid suspension of water and alcohol) that exceeds a level of 10 ml | Remove the fuel from the tank and clean the actual tank |
| 3 | Draw off 0.5 litres of fuel from the bottom of the tank. Fill a glass container with this fuel. Leave the container to rest on a horizontal surface for about 5 minutes to allow the sedimentation of the particles in suspension. Check that there are no white or light brown crystals (sand) or irregular black particles (rubber) | Remove the fuel from the tank and clean the actual tank |

## 1040AC FUEL LEVEL GAUGE CHECK  [939005355]
- Path: Test > 10 ENGINE > 1040 FUEL TANK AND PIPES > 1040A FUEL TANK AND COMPONENTS > 1040AC FUEL LEVEL GAUGE CHECK
- Kind: test / check procedure
- Applies to: engines: 3.2 JTS; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005355

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Check the fuel level signalled by the gauge in the panel and make a note of it. Connect to the pump connector See N040 FUEL PUMP AND LEVEL GAUGE [→939004413] between Pins A and C and check that the resistance reading is consistent with the reading in the panel, following the instructions in the table below. If the test is carried out to simply check the level gauge, without any further defects reported by the customer, if the reading is consistent, the test is over | Move on to Step 8 |
| Level | Full | 3/4 | 1/2 | 1/4 | Reserve | Empty |
| --- | --- | --- | --- | --- | --- | --- |
| Resistance (Ohm) | 20 | 77 | 152,5 | 225 | 259,5 | 300 |
|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 2 | Lift up the pump from the tank, checking that the electrical connection and the pipes that go to the second level sensor are correctly connected | Restore the correct electrical and hydraulic connections |
| 3 | Operate the pump and ensure that the fuel level in the tank is less than 1/4 full | Second level sensor and pump system faulty: replace the fuel tank Op. 1040A14 FUEL TANK - R + R FOR REPLACEMENT [→939010493] |
| 4 | Extract the pump from the tank, taking care to disconnect the electrical connection and the pipes that go to the second level sensor. Place the pump on a horizontal surface and short circuit the connection that goes to the disconnected sensor. Check the consistency between the resistance measured at the pump and the height at which the base of the level float finds itself, referring to the table below | Move on to Step 6 |
| Height (mm) | 140÷146 | 92,2÷96,2 | 56,3÷60,3 | 0,4÷4,4 | 0 |
| --- | --- | --- | --- | --- | --- |
| Resistance (Ohm) | 9,3÷11 | 63,1÷65,1 | 97,2÷100 | 137,3÷140.9 | 139 |
|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 5 | Second level sensor and pump system faulty: replace the fuel tank Op. 1040A14 FUEL TANK - R + R FOR REPLACEMENT [→939010493] The test can be considered over |  |
| 6 | The level gauge may be fitted incorrectly. Refit the level gauge Op. 1040A70 SUBMERGED PUMP ASSEMBLY COMPLETE WITH LEVEL GAUGE CONTROL - R + R [→939010496] and move on to Step 4. If the fault persists, replace the gauge |  |
| 7 | Check that the reading is now consistent. The test can be considered over | Replace the fuel pump assembly Op. 1040A70 SUBMERGED PUMP ASSEMBLY COMPLETE WITH LEVEL GAUGE CONTROL - R + R [→939010496] |
| 8 | Carry out the active diagnosis of the fuel level gauge in the instrument panel, checking that the pointer can complete the entire stroke throughout the scale | Replace the instrument panel Op. 5560B10 CONTROL PANEL - R+R [→939011063] |
| 9 | Check that the wiring between Pin 1 of the gauge See N040 FUEL PUMP AND LEVEL GAUGE [→939004413] and Pin 4 of connector D of the Body Computer See M001 BODY COMPUTER [→939004296] does not have continuity or insulation faults | Restore or, if necessary, replace the wiring See E5030 PETROL ENGINES ELECTRONIC MANAGEMENT [→939004361] |
| 10 | Check that the wiring between Pin A of the gauge See N040 FUEL PUMP AND LEVEL GAUGE [→939004413] and Pin 15 of connector D of the Body Computer See M001 BODY COMPUTER [→939004296] does not have continuity or insulation faults | Restore or, if necessary, replace the wiring See E5030 PETROL ENGINES ELECTRONIC MANAGEMENT [→939004361] |
| 11 | Check that the connector for the guage See N040 FUEL PUMP AND LEVEL GAUGE [→939004413] does not show signs of oxidation, deformation or breaks in the pins |  |

## 1040O FUEL TANK AND PIPE TESTS  [939010177]
- Path: Test > 10 ENGINE > 1040 FUEL TANK AND PIPES > 1040O FUEL TANK AND PIPE TESTS
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010177
- Subtopics: 1040OA FUEL SUPPLY CIRCUIT CHECK [939010178]; 1040OA FUEL SUPPLY CIRCUIT CHECK [939005356]; 1040OA FUEL SUPPLY CIRCUIT CHECK [939005357]

## 1040OA FUEL SUPPLY CIRCUIT CHECK  [939010178]
- Path: Test > 10 ENGINE > 1040 FUEL TANK AND PIPES > 1040O FUEL TANK AND PIPE TESTS > 1040OA FUEL SUPPLY CIRCUIT CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010178

> Note: The fuel system is highly sensitive. The work must be carried out with the greatest cleanliness and care. Any air in the system could damage the high pressure fuel pump. The vehicle must therefore never be driven with the fuel tank empty.
|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Check that the tank contains the correct type of fuel | Remove the content and wash the tank |
| 2 | The fuel reserve must be greater than 5 litres. | Put back a fuel quantity of at least 5 litres |
| 3 | Check for leaks in the fuel circuit. Check the hoss and connected pipes to identify any obstructions, damage etc. Check for breaks/scratches on the fuel supply or injection pipes. Check the fuel pipe fittings (quick-fit) Check that the oil pipes are not leaking. Check the condition of the three-way fastening elements. Check the fittings and seals are correctly fitted (use only Fiat Auto approved sealants). Check for blockages, leaks, air or water in the fuel system. | Repair or, if necessary, replace the faulty components Op. 1040 FUEL TANK AND PIPES [→939010490] |
| 4 | Check the tightening torques for the capscrews: | Restore component tightness to the correct values |
| 5 | Check the fuel filter | Restore the fuel filter to correct working order or replace if necessary **Op. 1044B20** |

## 1040OA FUEL SUPPLY CIRCUIT CHECK  [939005356]
- Path: Test > 10 ENGINE > 1040 FUEL TANK AND PIPES > 1040O FUEL TANK AND PIPE TESTS > 1040OA FUEL SUPPLY CIRCUIT CHECK
- Kind: test / check procedure
- Applies to: engines: 1.8, 1.9 JTS, 2.2 JTS; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005356

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Check that there are no signs of damage, incorrect fitting or leaks at the fuel supply/return pipes or at the actual tank | Repair or, if necessary, replace the faulty components |
| 2 | Insert the ignition key (panel on). Check that there is a whilstling noise in the next 2 seconds coming from the fuel pump indicating that it is activated and then the pump should be deactivated | Continue as instructed in the See Test 1040AD FUEL PUMP RELAY CHECK [→939005353 1040AD FUEL PUMP RELAY CHECK] |
| 3 | Check the fuel level signalled by the gauge in the panel and make a note of it. Connect to the pump connector See N040 FUEL PUMP AND LEVEL GAUGE [→939004413] between Pins A and C and check that the resistance reading is consistent with the reading in the panel, following the instructions in the table below | Continue as instructed in the See Test 1040AC FUEL LEVEL GAUGE CHECK [→939005261 1040AC FUEL LEVEL GAUGE CHECK] |
| Level | Full | 3/4 | 1/2 | 1/4 | Reserve | Empty |
| --- | --- | --- | --- | --- | --- | --- |
| Resistance (Ohm) | 17÷23 | 78÷84 | 136÷142 | 207÷213 | 244÷250,1 | 296,7÷303,5 |
|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 4 | Refit the fuel pump and check that the level on the gauge is more than 1/4 of a tank. Move on to Step 9 | Move on to Step 5 |
| 5 | Add fuel until there is at least 1/4 of a tank. Carry out a road test trying to replicate the conditions in which the customer reported the problem. Check that the following parameters do not cause sudden changes and/or values that are not consistent with the driving conditions: - accelerator pedal position - load - injection time - requested engine torque - detected engine torque - throttle angle | Continue as described by the diagnostic equipment |
| 6 | Check that the fuel filter and the fuel supply pipes are not constricted | Repair or, if necessary, replace the faulty components |
| 7 | Check that the pump electrical connections See N040 FUEL PUMP AND LEVEL GAUGE [→939004413] are not faulty | Restore or, if necessary, replace the electrical wiring See E5030 PETROL ENGINES ELECTRONIC MANAGEMENT [→939004361] |
| 8 | Check that the quality of the fuel in the tank is not poor by carrying out the See T FUEL QUALITY CHECK [→939005354 1040AE FUEL QUALITY CHECK] | The test is over. Remove the fuel from the tank and clean the actual tank |
| 9 | Press the START/STOP button (panel off). Connect a pressure gauge to the injectors. Press the START/STOP button (panel on). Check that the fuel pressure rises (whilst the pump is working) between 5.7 and 6.3 bar | Remove the constrictions in the fuel supply and/or return pipes. If necessary, replace them |
| 10 | Once the pressure has gone down again, check, within the space of a minute, that there has not been a fall in pressure of more than 0.3 bar | Continue as instructed in the See table X011 LEAKS IN FUEL FEED SYSTEM [→939010154 X011 LEAKS IN FUEL FEED SYSTEM] |

## 1040OA FUEL SUPPLY CIRCUIT CHECK  [939005357]
- Path: Test > 10 ENGINE > 1040 FUEL TANK AND PIPES > 1040O FUEL TANK AND PIPE TESTS > 1040OA FUEL SUPPLY CIRCUIT CHECK
- Kind: test / check procedure
- Applies to: engines: 3.2 JTS; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005357

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Check that there are no signs of damage, incorrect fitting or leaks at the fuel supply/return pipes or at the actual tank | Repair or, if necessary, replace the faulty components |
| 2 | Insert the ignition key (panel on). Check that there is a whilstling noise in the next 2 seconds coming from the fuel pump indicating that it is activated and then the pump should be deactivated. | Continue as instructed in the See Test 1040AD FUEL PUMP RELAY CHECK [→939005353 1040AD FUEL PUMP RELAY CHECK] |
| 3 | Check the fuel level signalled by the gauge in the panel and make a note of it. Connect to the pump connector See N040 FUEL PUMP AND LEVEL GAUGE [→939004413] between Pins A and C and check that the resistance reading is consistent with the reading in the panel, following the instructions in the table below | Continue as instructed in the See Test 1040AC FUEL LEVEL GAUGE CHECK [→939005261 1040AC FUEL LEVEL GAUGE CHECK] |
| Level | Full | 3/4 | 1/2 | 1/4 | Reserve | Empty |
| --- | --- | --- | --- | --- | --- | --- |
| Resistance (Ohm) | 20 | 77 | 152,5 | 225 | 259,5 | 300 |
|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 4 | Refit the fuel pump and check that the level on the gauge is more than 1/4 of a tank. Move on to Step 9 | Move on to Step 5 |
| 5 | Add fuel until there is at least 1/4 of a tank. Carry out a road test trying to replicate the conditions in which the customer reported the problem. Check that the following parameters do not cause sudden changes and/or values that are not consistent with the driving conditions: - accelerator pedal position - load - injection time - requested engine torque - detected engine torque - throttle angle | Continue as described by the diagnostic equipment |
| 6 | Check that the fuel filter and the fuel supply pipes are not constricted | Repair or, if necessary, replace the faulty components |
| 7 | Check that the pump electrical connections See N040 FUEL PUMP AND LEVEL GAUGE [→939004413] are not faulty | Restore or, if necessary, replace the electrical wiring See E5030 PETROL ENGINES ELECTRONIC MANAGEMENT [→939004361] |
| 8 | Check that the quality of the fuel in the tank is not poor by carrying out the test See T FUEL QUALITY CHECK [→939005354 1040AE FUEL QUALITY CHECK] | Remove the fuel from the tank and clean the actual tank |
| 9 | Press the START/STOP button (panel off). Connect a pressure gauge to the injectors. Press the START/STOP button (panel on). Check that the fuel pressure increases (whilst the pump is working) between 5.7 and 6.3 bar | Remove the constrictions in the fuel supply and/or return pipes. If necessary, replace them |
| 10 | Once the pressure has gone down again, check, within the space of a minute, that there has not been a fall in pressure of more than 0.3 bar | Continue as instructed in the See table X011 LEAKS IN FUEL FEED SYSTEM [→939010154 X011 LEAKS IN FUEL FEED SYSTEM] |

## 1048 ENGINE AIR SUPPLY CIRCUIT  [939010179]
- Path: Test > 10 ENGINE > 1048 ENGINE AIR SUPPLY CIRCUIT
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010179
- Subtopics: 1048O ENGINE AIR SUPPLY SYSTEM TESTS [939010180]

## 1048O ENGINE AIR SUPPLY SYSTEM TESTS  [939010180]
- Path: Test > 10 ENGINE > 1048 ENGINE AIR SUPPLY CIRCUIT > 1048O ENGINE AIR SUPPLY SYSTEM TESTS
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010180
- Subtopics: 1048OA AIR INTAKE/VACUUM CIRCUIT CHECK [939010181]

## 1048OA AIR INTAKE/VACUUM CIRCUIT CHECK  [939010181]
- Path: Test > 10 ENGINE > 1048 ENGINE AIR SUPPLY CIRCUIT > 1048O ENGINE AIR SUPPLY SYSTEM TESTS > 1048OA AIR INTAKE/VACUUM CIRCUIT CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010181

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Check the vacuum supply system components/functions: in particular, check for leaks or blockages. Check the seal of the secondary air inlet/turborcharging system hoses. Also check for any obstructions or porosity. Check for leaks in the intercooler. Check that the pipe restriction bands in the air intake/inlet system are correctly fitted. Check the hoses and connected pipes to identify any obstructions, damage etc. Check that the debimeter is not contaminated. Check the exhaust gas turbocharger and exhaust system components/functions | If possible, renew the pipes. Otherwise replace the faulty components Op. 1048A VACUUM AIR CIRCUIT [→939010511] |
| 2 | Check that the air filter is not contaminated | Replace the filter element Op. 1048A14 AIR CLEANER FILTER ELEMENT - REPLACE. [→939010514] |
| 3 | Check that the air filter is correctly fitted | Refit correctly Op. 1048A14 AIR CLEANER FILTER ELEMENT - REPLACE. [→939010514] |
| 4 | Turn the ignition key to the OFF position. Disconnect the vacuum hose from the vacuum pump Connect a pressure gauge between the vacuum pump and the hose (see following figure). Start the engine, adjust to idle speed and check that the reading on the pressure gauge is -0.7 and 1.0 bars | Replace the vacuum unit Op. 3330D30 VACUUM PUMP - R+R [→939010804] |
[image: https://sloeber94.github.io/elrnDB/media/939003056.jpg]

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 5 | Turn the ignition key to the OFF position. Reconnect the hose to the vacuum pump Disconnect the vacuum hose from the turbocharge actuator solenoid (see following figure). Connect the pressure gauge between the solenoid and the hose. Start the engine and adjust to idle speed. Select the following control unit at the diagnostic equipment: EDC16C39 Diesel electronic injection control unit. Carry out active diagnosis: Turbo regulator, ensuring that it is successful | Replace the solenoid valve Op. 1064B42 SOLENOID CONTROLLING TURBOCHARGER VANE POSITION ACTUATOR - R.R [→939010582] |
[image: https://sloeber94.github.io/elrnDB/media/939003057.jpg]

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 6 | Check that the vacuum read on the pressure gauge during active diagnosis is between -0.5 and 1.0 bars. | Check the turbo pressure control solenoid is operating correctly See Test 1064BB CHECK ON OPERATION OF SUPERCHARGING PRESSURE SOLENOID VALVE (PIERBURG) [→939010216 1064BB CHECK ON OPERATION OF SUPERCHARGING PRESSURE SOLENOID VALVE (PIERBURG)] |
| 7 | Turn the ignition key to the OFF position. Reconnect the vacuum hose to the turbocharger actuator solenoid. Start the engine and adjust to idle speed. Select the following parameters in the parameter screen: EGR valve opening and measured Air Mass. Set conditions where the EGR valve is open and check that the intake air mass is between 20 and 40 kg/h | Check the exhaust gas recovery solenoid is operating correctly See Test 1080CB E.G.R. SOLENOID FUNCTIONAL TEST [→939010230 1080CB E.G.R. SOLENOID FUNCTIONAL TEST] |
| 8 | Then return to idle speed. Set conditions where the EGR valve is closed and in these conditions check that the intake air mass is between 40 and 60 kg/h | Replace the debimeter Op. 1060G10 AIR FLOW METER - R.R. [→939010563] |

## 1056 PETROL INJECTION SYSTEM  [939005358]
- Path: Test > 10 ENGINE > 1056 PETROL INJECTION SYSTEM
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.8, 1.9 JTS, 2.2 JTS, 3.2 JTS; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005358
- Subtopics: 1056B MULTI-POINT INJECTION SYSTEM (MPI) [939005359]

## 1056B MULTI-POINT INJECTION SYSTEM (MPI)  [939005359]
- Path: Test > 10 ENGINE > 1056 PETROL INJECTION SYSTEM > 1056B MULTI-POINT INJECTION SYSTEM (MPI)
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.8, 1.9 JTS, 2.2 JTS, 3.2 JTS; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005359
- Subtopics: 1056BA INJECTOR OPERATION CHECK [939005360]; 1056BA INJECTOR OPERATION CHECK [939005361]; 1056BC ENGINE COOLANT TEMPERATURE SENSOR OPERATION CHECK [939005362]

## 1056BA INJECTOR OPERATION CHECK  [939005360]
- Path: Test > 10 ENGINE > 1056 PETROL INJECTION SYSTEM > 1056B MULTI-POINT INJECTION SYSTEM (MPI) > 1056BA INJECTOR OPERATION CHECK
- Kind: test / check procedure
- Applies to: engines: 1.8, 1.9 JTS, 2.2 JTS; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005360

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Using the diagnostic equipment, check that the engine coolant temperature is in a range between 10 and 32 °C | Move on to Step 3 |
| 2 | Disconnect the injector connector and check that the resistance between Pins 1 and 2 is between 11 and 14 Ohm and make a note of the resistance reading. Repeat the test for each injector | Replace the injector Op. 1056F70 INJECTOR ONE R R WITH FUEL MANIFOLD PIPE REMOVED INCLUDES GASKET REPLACEMENT [→939010537] |
| 3 | Subtract the lower value measured from the higher one and check that the difference is more than 3 Ohm | Move on to Step 5 |
| 4 | Calculate the average of the resistance readings and replace the injector Op. 1056F70 INJECTOR ONE R R WITH FUEL MANIFOLD PIPE REMOVED INCLUDES GASKET REPLACEMENT [→939010537] whose resistance value is furthest away from the average figure. The test can be considered over |  |
| 5 | Using the diagnostic equipment, check that the engine coolant temperature is less than 94 °C | Wait until the coolant temperature is lower than 94 °C |
| 6 | Check that the fuel tank is at least 1/4 full (reading on the gauge) and add fuel if necessary Press the START/STOP button (panel off). Connect a pressure gauge to the injectors. Press the START/STOP button (panel on). Check that the fuel pressure increases (whilst the pump is working) between 5.7 and 6.3 bar | Continue as instructed in the See Test 1040OA FUEL SUPPLY CIRCUIT CHECK [→939005356 1040OA FUEL SUPPLY CIRCUIT CHECK] |
| 7 | Leave the pressure in the rail to stabilize and check that the variation in pressure is less than 0.4 bar from then over the next minute | Continue as instructed in the See Test 1040OA FUEL SUPPLY CIRCUIT CHECK [→939005356 1040OA FUEL SUPPLY CIRCUIT CHECK] |
| 8 | Press the START/STOP button (panel off). Connect a 5 V current generator to the terminals of the connector for injector 1 See N070 INJECTOR [→939004444] Check that the fuel pressure increases (whilst the pump is working) and make a note of the figure reached. Activate the generator with a current between 0.5 and 2.5 A opening the connector and producing a fall in the rail pressure. Make a note of the new pressure reading. Repeat the test for each injector |  |
| 9 | Calculate the falls in pressure for each injector and work out the average. Check that the difference in the fall in pressure is not more than 0.1 bar from the average for any of the injectors | Replace the injector Op. 1056F70 INJECTOR ONE R R WITH FUEL MANIFOLD PIPE REMOVED INCLUDES GASKET REPLACEMENT [→939010537] |

## 1056BA INJECTOR OPERATION CHECK  [939005361]
- Path: Test > 10 ENGINE > 1056 PETROL INJECTION SYSTEM > 1056B MULTI-POINT INJECTION SYSTEM (MPI) > 1056BA INJECTOR OPERATION CHECK
- Kind: test / check procedure
- Applies to: engines: 3.2 JTS; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005361

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Using the diagnostic equipment, check that the engine coolant temperature is in a range between 10 and 32 °C | Move on to Step 3 |
| 2 | Disconnect the injector connector and check that the resistance between Pins 1 and 2 is between 11 and 14 Ohm and make a note of the resistance reading. Repeat the test for each injector | Replace the injector Op. 1056F70 INJECTOR ONE R R WITH FUEL MANIFOLD PIPE REMOVED INCLUDES GASKET REPLACEMENT [→939010537] |
| 3 | Subtract the lower value measured from the higher one and check that the difference is more than 3 Ohm | Move on to Step 5 |
| 4 | Calculate the average of the resistance readings and replace the injector Op. 1056F70 INJECTOR ONE R R WITH FUEL MANIFOLD PIPE REMOVED INCLUDES GASKET REPLACEMENT [→939010537] whose resistance value is furthest away from the average figure. The test can be considered over |  |
| 5 | Using the diagnostic equipment, check that the engine coolant temperature is less than 94 °C | Wait until the coolant temperature is lower than 94 °C |
| 6 | Check that the fuel tank is at least 1/4 full (reading on the gauge) and add fuel if necessary Press the START/STOP button (panel off). Connect a pressure gauge to the injectors. Press the START/STOP button (panel on). Check that the fuel pressure increases (whilst the pump is working) between 5.7 and 6.3 bar | Continue as instructed in the See Test 1040OA FUEL SUPPLY CIRCUIT CHECK [→939005356 1040OA FUEL SUPPLY CIRCUIT CHECK] |
| 7 | Leave the pressure in the rail to stabilize and check that the variation in pressure is less than 0.4 bar from then over the next minute | Continue as instructed in the See Test 1040OA FUEL SUPPLY CIRCUIT CHECK [→939005356 1040OA FUEL SUPPLY CIRCUIT CHECK] |
| 8 | Press the START/STOP button (panel off). Connect a 5 V current generator to the terminals of the connector for injector 1 See N070 INJECTOR [→939004444] Check that the fuel pressure increases (whilst the pump is working) and make a note of the figure reached. Activate the generator with a current between 0.5 and 2.5 A opening the connector and producing a fall in the rail pressure. Make a note of the new pressure reading. Repeat the test for each injector |  |
| 9 | Calculate the falls in pressure for each injector and work out the average. Check that the difference in the fall in pressure is not more than 0.1 bar from the average for any of the injectors | Replace the injector Op. 1056F70 INJECTOR ONE R R WITH FUEL MANIFOLD PIPE REMOVED INCLUDES GASKET REPLACEMENT [→939010537] |

## 1056BC ENGINE COOLANT TEMPERATURE SENSOR OPERATION CHECK  [939005362]
- Path: Test > 10 ENGINE > 1056 PETROL INJECTION SYSTEM > 1056B MULTI-POINT INJECTION SYSTEM (MPI) > 1056BC ENGINE COOLANT TEMPERATURE SENSOR OPERATION CHECK
- Kind: test / check procedure
- Applies to: engines: 3.2 JTS; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005362

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Check that, as the temperature of the engine coolant varies, the resistance measured between the two sensor pins See K036 ENGINE COOLANT TEMPERATURE SENSOR/SENDER UNIT [→939004185] is within the values indicated in the table below | Replace the temperature sensor Op. 1056F50 COOLANT TEMPERATURE SENSO R R [→939010531] |
| Temperature (°C) | Minimum resistance (Ohm) | Maximum resistance (Ohm) |
| --- | --- | --- |
| -40 | 40.490 | 50.136 |
| -20 | 14.096 | 16.827 |
| -10 | 8.642 | 10.152 |
| 0 | 5.466 | 6.326 |
| 20 | 2.351 | 2.649 |
| 25 | 1.941 | 2.173 |
| 40 | 1.118 | 1.231 |
| 60 | 573 | 618 |
| 80 | 313 | 332 |
| 100 | 182 | 191 |
| 120 | 109 | 116 |
| 140 | 68 | 74 |

## 1060 DIESEL INJECTION SYSTEM  [939010182]
- Path: Test > 10 ENGINE > 1060 DIESEL INJECTION SYSTEM
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010182
- Subtopics: 1060E DIESEL PRESSURE PUMP AND CONTROL [939010183]; 1060G DIESEL INJECTION PRESSURE PUMP ELECTRONIC CONTROL [939010186]; 1060O DIESEL FUEL INJECTION SYSTEM TESTS [939010202]; 1060F INJECTORS AND PIPES [939010208]

## 1060E DIESEL PRESSURE PUMP AND CONTROL  [939010183]
- Path: Test > 10 ENGINE > 1060 DIESEL INJECTION SYSTEM > 1060E DIESEL PRESSURE PUMP AND CONTROL
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010183
- Subtopics: 1060EA DIESEL FUEL TEMPERATURE CHECK [939010184]; 1060EB FLOW MODULATOR SOLENOID OPERATION CHECK [939010185]

## 1060EA DIESEL FUEL TEMPERATURE CHECK  [939010184]
- Path: Test > 10 ENGINE > 1060 DIESEL INJECTION SYSTEM > 1060E DIESEL PRESSURE PUMP AND CONTROL > 1060EA DIESEL FUEL TEMPERATURE CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010184

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | At service temperature, with engine idling, the reading must be between 10 and 120°C. The test may be said to be concluded | Move on to Step 2 |
| 2 | Press the START/STOP button and turn off the engine. Disconnect the wiring harness connector from the temperature sensor and fuel heater coil **See K100 MIL WARNING LIGHT NOT WORKING (REMAINS OFF BEFORE STARTING)** Press the START/STOP button. Measure the voltage between the sensor Pin 4 and Earth. Ensure is between 4.8 and 5.2 V. Go on to Step 4 **See K100 MIL WARNING LIGHT NOT WORKING (REMAINS OFF BEFORE STARTING)** | Move on to Step 3 |
| 3 | If faults are present, repair or if necessary replace the electrical wiring between the engine control unit and the heater coil See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] The test can be considered over | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |
| 4 | Measure the voltage between Pins 3 and 4 of the sensor. Check it is between 4.8 and 5.2 V **See K100 MIL WARNING LIGHT NOT WORKING (REMAINS OFF BEFORE STARTING)** | Move on to Step 3 |
| 5 | Replace the diesel heater coil and ensure the fault has disappeared **Op. 1044D10 FUEL HEATER - R + R** | Repair the original heater coil and replace the engine management control unit. Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |

## 1060EB FLOW MODULATOR SOLENOID OPERATION CHECK  [939010185]
- Path: Test > 10 ENGINE > 1060 DIESEL INJECTION SYSTEM > 1060E DIESEL PRESSURE PUMP AND CONTROL > 1060EB FLOW MODULATOR SOLENOID OPERATION CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010185

| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Press the START/STOP button and turn off the engine. Disconnect the cable loom connector from the flow modifying solenoid valve. Press the START/STOP button. Check that the voltage across pin 6 of the solenoid See L064 FLOW MODIFYING SOLENOID VALVE [→939004290] and the earth is greater than 11 V. Move on to Step 4 | Move on to Step 2 |
| 2 | Press the START/STOP button. In the engine compartment junction unit remove fuse F11 (third from the right in the bottom row). Press the START/STOP button. Check the voltage between the inlet contact of fuse F11 and earth. Ensure it is greater than 11 V. | Replace the junction unit Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] |
| 3 | If faults are found, restore the wiring between the junction unit and the solenoid See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] If necessary, replace the wiring. The test may be considered complete | Replace the junction unit Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] |
| 4 | Check that the voltage across pin 6 and 2 of the solenoid See L064 FLOW MODIFYING SOLENOID VALVE [→939004290] is greater than 11 V. Move on to Step 6 | Move on to Step 5 |
| 5 | If faults are found, restore the wiring between the engine control unit and the solenoid See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] Replace the wiring if necessary The test can be considered over | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |
| 6 | Press the START/STOP button. Disconnect the wiring harness connector from engine control unit connector B Press the START/STOP button. Check that the voltage across pin 45 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and the earth is greater than 0.3 V. | Repair or if necessary replace the electrical wiring between the engine control unit and the solenoid See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 7 | Press the START/STOP button. Check that the voltage across pin 45 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and the earth is more than 500 kOhm. | Repair or if necessary replace the electrical wiring between the engine control unit and the solenoid See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 8 | Check that the voltage across pin 45 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and pin 1 of the solenoid See L064 FLOW MODIFYING SOLENOID VALVE [→939004290] is less than 5 Ohms | Repair or if necessary replace the electrical wiring between the engine control unit and the solenoid See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 9 | Press the START/STOP button. Check that the voltage across pin 35 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and the earth is greater than 0.3 V. | Repair or if necessary replace the electrical wiring between the engine control unit and the solenoid See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 10 | Press the START/STOP button. Check that the voltage across pin 35 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and the earth is more than 500 kOhm. | Repair or if necessary replace the electrical wiring between the engine control unit and the solenoid See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 11 | Check that the voltage across pin 35 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and pin 5 of the solenoid See L064 FLOW MODIFYING SOLENOID VALVE [→939004290] is less than 5 Ohms | Repair or if necessary replace the electrical wiring between the engine control unit and the solenoid See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 12 | Replace the flow bypass solenoid **Op. 1060E20** and check the fault has disappeared | Restore the original solenoid valve and replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |

## 1060G DIESEL INJECTION PRESSURE PUMP ELECTRONIC CONTROL  [939010186]
- Path: Test > 10 ENGINE > 1060 DIESEL INJECTION SYSTEM > 1060G DIESEL INJECTION PRESSURE PUMP ELECTRONIC CONTROL
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010186
- Subtopics: 1060GD ATMOSPHERIC PRESSURE CHECK [939010187]; 1060GG MEASURED AIR MASS CHECK [939010188]; 1060GH DIESEL FUEL PRESSURE CHECK [939010189]; 1060GI ENGINE SPEED CHECK [939010190]; 1060GJ ENGINE MANAGEMENT CONTROL UNIT SOFTWARE RELEASE CHECK [939010191]; 1060GL CHECK OPERATION OF MAIN ENGINE CONTROL UNIT RELAY [939010192]; 1060GM CHECK ENGINE CONTROL UNIT CONNECTIONS [939010193]; 1060GN CHECK ENGINE CONTROL UNIT CONNECTIONS [939010194]; 1060GO INTEGRATED THROTTLE BODY OPERATION CHECK [939010195]; 1060GP CHECK ENGINE CONTROL UNIT CONNECTIONS [939010196]; 1060GQ CHECK OPERATION OF SENSOR DETECTING PRESENCE OF WATER IN DIESEL FILTER [939010197]; 1060GR CHECK OPERATION OF FUEL PRESSURE SENSOR ON RAIL [939010198]; 1060GS DEBIMETER OPERATION CHECK [939010199]; 1060GK CHECK CONTROL UNIT SOFTWARE AND HARDWARE [939010200]; 1060GF SUPERCHARGING PRESSURE CHECK [939010201]

## 1060GD ATMOSPHERIC PRESSURE CHECK  [939010187]
- Path: Test > 10 ENGINE > 1060 DIESEL INJECTION SYSTEM > 1060G DIESEL INJECTION PRESSURE PUMP ELECTRONIC CONTROL > 1060GD ATMOSPHERIC PRESSURE CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010187

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Turn the ignition key to the ON position. With the engine off and all users off, compare the displayed pressure with the external air pressure. The displayed values should be included in the range between 0.8 and 1.2 bars and approximately equal to the external pressure. | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |

## 1060GG MEASURED AIR MASS CHECK  [939010188]
- Path: Test > 10 ENGINE > 1060 DIESEL INJECTION SYSTEM > 1060G DIESEL INJECTION PRESSURE PUMP ELECTRONIC CONTROL > 1060GG MEASURED AIR MASS CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010188

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Turn the ignition key to the ON position. With the engine off and all users off the measured Air Mass must be in a range between 0 and 1 kg/h | Move on to Step 5 |
| 2 | With the engine idling and warmed up, with the EGR valve closed and accelerator pedal not operated, the measured Air Mass must be in a range between 40 and 60 kg/h | Move on to Step 5 |
| 3 | With all users off, when the accelerator pedal is pumped several times, the measured Air Mass must be seen to alter in a short time. | Move on to Step 5 |
| 4 | With the EGR Valve open and accelerator pedal not operated, the Measured Air Mass must be in a range between 20 and 40 kg/h. The test may be said to be completed | Move on to Step 5 |
| 5 | Press the START/STOP button and turn off the engine. Disconnect the wiring harness connector from the air flow meter. See K041 AIR FLOW METER [→939004191] Press the START/STOP button. Measure the voltage between Pin 1 of the gauge and Earth, ensuring it is greater than 11 V. See K041 AIR FLOW METER [→939004191] Move on to Step 7 | Move on to Step 6 |
| 6 | If faults are present, repair or if necessary replace the electrical wiring between the engine compartment junction unit and the debimeter. See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] The test can be considered over | Replace the junction unit Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] |
| 7 | Measure the voltage between Pins 1 and 2 of the gauge and Earth, ensuring it is greater than 11 V. See K041 AIR FLOW METER [→939004191] Move on to Step 9 | Move on to Step 8 |
| 8 | If faults are present, repair or if necessary replace the electrical wiring between the engine control unit and the debimeter. See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] The test can be considered over | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |
| 9 | Measure the voltage between Pin 4 of the gauge and Earth, ensuring it is in a range between 4.8 and 5.2 V. See K041 AIR FLOW METER [→939004191] | Move on to Step 8 |
| 10 | Replace the debimeter and check the fault has disappeared Op. 1060G10 AIR FLOW METER - R.R. [→939010563] | Repair the original debimeter and replace the engine management control unit. Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |

## 1060GH DIESEL FUEL PRESSURE CHECK  [939010189]
- Path: Test > 10 ENGINE > 1060 DIESEL INJECTION SYSTEM > 1060G DIESEL INJECTION PRESSURE PUMP ELECTRONIC CONTROL > 1060GH DIESEL FUEL PRESSURE CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010189

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | With the engine idling and warm, with all users off and the accelerator pedal not operated, the target Diesel Pressure and the measured Diesel Pressure must be in a range between 200 and 500 bars | Move on to Step 3 |
| 2 | When the accelerator pedal is pumped several times, the measured Diesel Pressure must be in a range between 200 and 1500 bars. The test can be considered over | Move on to Step 3 |
| 3 | Turn the ignition key to the OFF position. Disconnect the wiring harness connector from the fuel pressure sensor. See K083 FUEL PRESSURE SENSOR [→939004238] Turn the ignition key ON. Measure the voltage between Pin 3 of the sensor and Earth, checking that it is within a range between 4.8 and 5.2 V. See K083 FUEL PRESSURE SENSOR [→939004238] Move on to Step 5 | Move on to Step 4 |
| 4 | If faults are present, repair or if necessary replace the electrical wiring between the engine control unit and the debimeter. See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] The test can be considered over | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |
| 5 | Measure the voltage between Pins 1 and 3 of the sensor. Check it is in a range between 4.8 and 5.2 V See K083 FUEL PRESSURE SENSOR [→939004238] | Move on to Step 4 |
| 6 | Measure the voltage between Pin 2 of the sensor and Earth, ensuring it is in a range between 4.8 and 5.2 V. See K083 FUEL PRESSURE SENSOR [→939004238] | Move on to Step 4 |
| 7 | Replace the pressure sensor and check the fault has disappeared Op. 1060G28 FUEL PRESSURE SENSOR ON FUEL MANIFOLD TO INJECTORS - R.R [→939010568] | Repair the original pressure sensor and replace the engine management control unit. Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |

## 1060GI ENGINE SPEED CHECK  [939010190]
- Path: Test > 10 ENGINE > 1060 DIESEL INJECTION SYSTEM > 1060G DIESEL INJECTION PRESSURE PUMP ELECTRONIC CONTROL > 1060GI ENGINE SPEED CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010190

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Press the START/STOP and check that the engine rpm does not exceed 60 rpm. | Move on to Step 3 |
| 2 | With the engine idling and warm, with all users off and the accelerator pedal not operated, the engine rpm must be in a range between 770 and 930 rpm. The test may be said to be completed | Move on to Step 3 |
| 3 | Check for the presence of error P0219 – Excessive speed recognition. Continue to Step 5 | Engine rpm is greater than 5400 rpm. Inform the customer that this high engine rpm speed may cause mechanical damage. Continue to Step 4 |
| 4 | Check that the intake system is not contaminated with oil. The test may be considered to be completed | Continue as indicated See table X011 LEAKS IN FUEL FEED SYSTEM [→939010154 X011 LEAKS IN FUEL FEED SYSTEM] |
| 5 | Press the START/STOP button and turn off the engine. Disconnect the wiring harness connector from the engine control unit See M010 ENGINE MANAGEMENT ECU [→939004314] Turn the ignition key to the ON position. Measure the voltage between Pin 27 of connector B control unit wiring side and Earth, checking it is less than 0.3 V. See M010 ENGINE MANAGEMENT ECU [→939004314] Move on to Step 7 | Move on to Step 6 |
| 6 | If faults are present, repair or if necessary replace the electrical wiring between the engine control unit and the rpm sensor See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] The test can be considered over | Change the rpm sensor Op. 1060G20 ENGINE RPM SENSOR - R.R. [→939010566] |
| 7 | Press the START/STOP button. Measure the voltage between Pin 27 of connector B control unit wiring side and Earth, checking it is greater than 500 V. See M010 ENGINE MANAGEMENT ECU [→939004314] | Move on to Step 6 |
| 8 | Measure the resistance between Pins 12 and 27 of control unit wiring side, checking it is in a range between 200 and 3000 Ohms. See M010 ENGINE MANAGEMENT ECU [→939004314] Move on to Step 11 | Move on to Step 9 |
| 9 | Measure the resistance between Pins 12 and 27 of connector B control unit wiring side, checking it is less than 200 Ohms. See M010 ENGINE MANAGEMENT ECU [→939004314] | Move on to Step 6 |
| 10 | If faults are present, repair or if necessary replace the engine control unit electrical wiring. See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] The test can be considered over | Change the rpm sensor Op. 1060G20 ENGINE RPM SENSOR - R.R. [→939010566] |
| 11 | Reconnect the wiring harness connector to the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] Disconnect the wiring harness connector from the rpm sensor. See K046 RPM SENSOR [→939004195] Set the multimeter to measure alternating current voltage Measure the voltage between sensor wiring side Pins 1 and 2 See K046 RPM SENSOR [→939004195] Start the engine and check the voltage is greater than 0.5 V | Change the rpm sensor Op. 1060G20 ENGINE RPM SENSOR - R.R. [→939010566] |
| 12 | Check that the sensor operates correctly: in particular, check for intermittent contacts, missing teeth, incorrect reference point, incorrect gap position, etc. See K046 RPM SENSOR [→939004195] | Restore correct operation, if necessary, replace the faulty components |
| 13 | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |  |

## 1060GJ ENGINE MANAGEMENT CONTROL UNIT SOFTWARE RELEASE CHECK  [939010191]
- Path: Test > 10 ENGINE > 1060 DIESEL INJECTION SYSTEM > 1060G DIESEL INJECTION PRESSURE PUMP ELECTRONIC CONTROL > 1060GJ ENGINE MANAGEMENT CONTROL UNIT SOFTWARE RELEASE CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010191

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Use a Remote Examiner to check that the version on the engine control is the latest | Carry out Flash Eeprom programming of the engine control unit |
| 2 | Repeat Flash Eeprom programming. Ensure it is successful. The test can be considered over | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |
| 3 | Check the fault has disappeared | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |

## 1060GL CHECK OPERATION OF MAIN ENGINE CONTROL UNIT RELAY  [939010192]
- Path: Test > 10 ENGINE > 1060 DIESEL INJECTION SYSTEM > 1060G DIESEL INJECTION PRESSURE PUMP ELECTRONIC CONTROL > 1060GL CHECK OPERATION OF MAIN ENGINE CONTROL UNIT RELAY
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010192

| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Press the START/STOP button and turn off the engine. In the engine compartment junction unit, remove relay T9 (in the middle of the lower row) Press the START/STOP button. Measure the voltage between Pin 85 of the base unit for relay T9 and the earth, ensuring it is less than 0.3 V. Move on to Step 4 | Move on to Step 2 |
| 2 | If faults are found, restore the wiring between the engine compartment junction unit and the engine compartment junction unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] Replace the wiring if necessary The test can be considered over | Replace the junction unit Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] and move on to Step 3 |
| 3 | Check the fault disappears. The test can be considered over | Repair the original junction unit and replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |
| 4 | Measure the voltage between Pin 87 of the base unit for relay T9 and the earth, ensuring it is less than 1.0 V. Move on to Step 15 | Move on to Step 5 |
| 5 | Press the START/STOP button. Disconnect the cable loom connector from the engine management control unit connector A. Press the START/STOP button. Measure the voltage between Pin 87 of the base unit for relay T9 and the earth, ensuring it is greater than 1.0 V. | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |
| 6 | Press the START/STOP button. Disconnect the wiring harness connector from the EGR solenoid Press the START/STOP button. Measure the voltage between Pin 87 of the base unit for relay T9 and the earth, ensuring it is greater than 1.0 V. | Replace the EGR solenoid valve Op. 1080C24 E.G.R. SYSTEM SOLENOID - R + R [→939010635] |
| 7 | Press the START/STOP button. Disconnect the cable loom connector from the flow modifying solenoid valve. Press the START/STOP button. Measure the voltage between Pin 87 of the base unit for relay T9 and the earth, ensuring it is greater than 1.0 V. | Replace the solenoid valve **Op. 1064A34 TURBOCHARGER PRESSURE ADJUSTMENT VALVE - R.R.** |
| 8 | Press the START/STOP button. Disconnect the wiring harness connector from the built-in throttle body actuator. Press the START/STOP button. Measure the voltage between Pin 87 of the base unit for relay T9 and the earth, ensuring it is greater than 1.0 V. | Replace the built-in throttle body actuator Op. 1060G50 THROTTLE BODY - R.R [→939010571] |
| 9 | Press the START/STOP button. Disconnect the wiring harness connector from the accelerator pedal potentiometer Press the START/STOP button. Measure the voltage between Pin 87 of the base unit for relay T9 and the earth, ensuring it is greater than 1.0 V. | Replace the accelerator pedal Op. 1068A20 ACCELERATOR PEDAL WITH BUILT-IN POTENTIOMETER - R.R [→939010585] |
| 10 | Press the START/STOP button. Disconnect the wiring harness connector from the brake pedal switch. Press the START/STOP button. Measure the voltage between Pin 87 of the base unit for relay T9 and the earth, ensuring it is greater than 1.0 V. | Replace the brake pedal switch Op. 5550D10 BRAKE LIGHT SWITCH - R+R [→939011051] |
| 11 | Press the START/STOP button. Disconnect the battery positive Press the START/STOP button. Measure the voltage between Pin 87 of the base unit for relay T9 and the earth, ensuring it is less than 1.0 V. | Move on to Step 14 |
| 12 | If faults are present, restore the wiring between the battery positive and the turbine variable geometry control solenoid See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] Replace the wiring if necessary The test can be considered over | Replace the solenoid valve Op. 1064B42 SOLENOID CONTROLLING TURBOCHARGER VANE POSITION ACTUATOR - R.R [→939010582] |
| 13 | If faults are present, restore the wiring between the various disconnected components See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] Replace the wiring if necessary The test can be considered over | Replace the junction unit Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] |
| 14 | Press the START/STOP button. Disconnect the cable loom connector from the engine management control unit connector A. Check the resistance between Pin 85 of the base unit for relay T9 and the earth is greater than 500 kOhms. Move on to Step 16 | Move on to Step 15 |
| 15 | If faults are found, restore the wiring between the engine compartment junction unit and the engine compartment junction unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] Replace the wiring if necessary The test can be considered over | Replace the junction unit Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] |
| 16 | Check that the resistance across Pin 85 of the base of relay T9 and Pin 72 of control unit connector A See M010 ENGINE MANAGEMENT ECU [→939004314] is greater than 5 Ohms. Move on to Step 15 | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |

## 1060GM CHECK ENGINE CONTROL UNIT CONNECTIONS  [939010193]
- Path: Test > 10 ENGINE > 1060 DIESEL INJECTION SYSTEM > 1060G DIESEL INJECTION PRESSURE PUMP ELECTRONIC CONTROL > 1060GM CHECK ENGINE CONTROL UNIT CONNECTIONS
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010193

| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Press the START/STOP button and turn off the engine. Connect the wiring harness connector from the accelerator pedal potentiometer Press the START/STOP button. Select the following system on the diagnostic equipment: Diesel EDC16C39 electronic injection system. Check that error P0641 – Power supply to sensors 1 is “Present”. Move on to Step 5 | Move on to Step 2 |
| 2 | Press the START/STOP button. Disconnect the wiring harness connector from engine control unit connector A Press the START/STOP button. Check that the voltage across pin 9 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and the earth is greater than 0.3 V. | Repair or if necessary replace the electrical wiring between the accelerator pedal potentiometer and the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 3 | Check that the voltage across pin 30 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and the earth is greater than 0.3 V. | Repair or if necessary replace the electrical wiring between the accelerator pedal potentiometer and the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 4 | Replace the accelerator pedal Op. 1068A20 ACCELERATOR PEDAL WITH BUILT-IN POTENTIOMETER - R.R [→939010585] and check the fault has disappeared. The test can be considered over | Repair the original accelerator pedal and replace the engine management control unit. Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |
| 5 | Press the START/STOP button. Disconnect the wiring harness connector from the timing sensor. Press the START/STOP button. Select the following system on the diagnostic equipment: Diesel EDC16C39 electronic injection system. Check that error P0641 – Power supply to sensors 1 is “Present”. | Replace the timing sensor **Op. 5510C30 ENGINE TIMING SENSOR - R+R** |
| 6 | Press the START/STOP button. Disconnect the wiring harness connector from engine control unit connector A Press the START/STOP button. Check that the voltage across pin 45 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and the earth is greater than 0.3 V. Move on to Step 8 | Move on to Step 7 |
| 7 | If faults are present, repair or if necessary replace the electrical wiring between the engine control unit and the accelerator pedal potentiometer. See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] Replace the wiring if necessary The test can be considered over | Replace the accelerator pedal Op. 1068A20 ACCELERATOR PEDAL WITH BUILT-IN POTENTIOMETER - R.R [→939010585] |
| 8 | Press the START/STOP button. Check that the voltage across pin 30 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and the earth is more than 500 kOhm. | Repair or if necessary replace the electrical wiring between the accelerator pedal potentiometer and the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 9 | Disconnect the wiring harness connector from engine control unit connector B Press the START/STOP button. Check that the voltage across Pin 11 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and the earth is greater than 0.3 V. | Repair or if necessary replace the electrical wiring between the timing sensor and the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 10 | Press the START/STOP button. Check that the voltage across pin 11 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and the earth is more than 500 kOhm. | Repair or if necessary replace the electrical wiring between the timing sensor and the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 11 | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |  |

## 1060GN CHECK ENGINE CONTROL UNIT CONNECTIONS  [939010194]
- Path: Test > 10 ENGINE > 1060 DIESEL INJECTION SYSTEM > 1060G DIESEL INJECTION PRESSURE PUMP ELECTRONIC CONTROL > 1060GN CHECK ENGINE CONTROL UNIT CONNECTIONS
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010194

| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Press the START/STOP button and turn off the engine. Disconnect the wiring harness connector from the fuel pressure sensor. Press the START/STOP button. Select the following system on the diagnostic equipment: Diesel EDC16C39 electronic injection system. Check that error P0651 – Power supply to sensors 2 is “Present”. Move on to Step 5 | Move on to Step 2 |
| 2 | Press the START/STOP button. Disconnect the wiring harness connector from engine control unit connector B Press the START/STOP button. Check that the voltage across pin 43 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and the earth is greater than 0.3 V. | Repair or if necessary replace the electrical wiring between the fuel pressure sensor and the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 3 | Check that the voltage across pin 8 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and the earth is greater than 0.3 V. | Repair or if necessary replace the electrical wiring between the fuel pressure sensor and the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 4 | Replace the fuel pressure sensor Op. 1060G28 FUEL PRESSURE SENSOR ON FUEL MANIFOLD TO INJECTORS - R.R [→939010568] The test can be considered over |  |
| 5 | Press the START/STOP button. Disconnect the wiring harness connector from the air temperature/pressure sensor. Press the START/STOP button. Select the following system on the diagnostic equipment: Diesel EDC16C39 electronic injection system. Check that error P0651 – Power supply to sensors 2 is “Present”. Move on to Step 9 | Move on to Step 6 |
| 6 | Press the START/STOP button. Disconnect the wiring harness connector from engine control unit connector B Press the START/STOP button. Check that the voltage across pin 40 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and the earth is greater than 0.3 V. | Repair or if necessary replace the electrical wiring between the air pressure/temperature sensor and the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 7 | Check that the voltage across pin 23 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and the earth is greater than 0.3 V. | Repair or if necessary replace the electrical wiring between the air pressure/temperature sensor and the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 8 | Replace the air temperature/pressure sensor Op. 1060G16 PRESSURE RELIEF SENSOR - R.R. [→939010565] The test can be considered over |  |
| 9 | Press the START/STOP button. Disconnect the wiring harness connector from the accelerator pedal potentiometer Press the START/STOP button. Select the following system on the diagnostic equipment: Diesel EDC16C39 electronic injection system. Check that error P0651 – Power supply to sensors 2 is “Present”. Move on to Step 13 | Move on to Step 10 |
| 10 | Press the START/STOP button. Disconnect the cable loom connector from control unit connector A Press the START/STOP button. Check that the voltage across pin 31 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and the earth is greater than 0.3 V. | Repair or if necessary replace the electrical wiring between the accelerator pedal potentiometer and the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 11 | Check that the voltage across pin 8 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and the earth is greater than 0.3 V. | Repair or if necessary replace the electrical wiring between the accelerator pedal potentiometer and the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 12 | Replace the accelerator pedal Op. 1068A20 ACCELERATOR PEDAL WITH BUILT-IN POTENTIOMETER - R.R [→939010585] and check the fault has disappeared. The test can be considered over | Repair the original accelerator pedal and replace the engine management control unit. Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |
| 13 | Press the START/STOP button. Disconnect the wiring harness connector from engine control unit connector B Press the START/STOP button. Check that the voltage across pin 28 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and the earth is greater than 0.3 V. | Repair or if necessary replace the electrical wiring between the fuel pressure sensor and the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 14 | Press the START/STOP button. Check that the voltage across pin 28 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and the earth is more than 500 kOhm. | Repair or if necessary replace the electrical wiring between the fuel pressure sensor and the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 15 | Disconnect the cable loom connector from control unit connector A Press the START/STOP button. Check that the voltage across pin 46 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and the earth is greater than 0.3 V. | Repair or if necessary replace the electrical wiring between the accelerator pedal potentiometer and the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 16 | Press the START/STOP button. Check that the voltage across pin 46 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and the earth is more than 500 kOhm. | Repair or if necessary replace the electrical wiring between the accelerator pedal potentiometer and the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 17 | Disconnect the cable loom connector from control unit connector B Press the START/STOP button. Check that the voltage across pin 13 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and the earth is greater than 0.3 V. | Repair or if necessary replace the electrical wiring between the air pressure/temperature sensor and the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 18 | Check that the voltage across pin 13 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and the earth is more than 500 kOhm. | Repair or if necessary replace the electrical wiring between the air pressure/temperature sensor and the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 19 | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |  |

## 1060GO INTEGRATED THROTTLE BODY OPERATION CHECK  [939010195]
- Path: Test > 10 ENGINE > 1060 DIESEL INJECTION SYSTEM > 1060G DIESEL INJECTION PRESSURE PUMP ELECTRONIC CONTROL > 1060GO INTEGRATED THROTTLE BODY OPERATION CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010195

| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Press the START/STOP button and turn off the engine. Disconnect the wiring harness connector from the built-in throttle body actuator. Press the START/STOP button. Check that the voltage across pin 2 of the actuator See N075 THROTTLE BODY ACTUATOR [→939004460] and the earth is greater than 11 V. Move on to Step 4 | Move on to Step 2 |
| 2 | Press the START/STOP button. In the engine compartment junction unit, remove fuse F11 (third from the right in the lower row) Press the START/STOP button. Check the voltage between the inlet contact of fuse F11 and earth. Ensure it is greater than 11 V. | Replace the junction unit **Op. 5505A18** |
| 3 | If faults are found, restore the wiring between the junction unit and the actuator See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] Replace the wiring if necessary The test can be considered over | Replace the junction unit **Op. 5505A18** |
| 4 | Check that the voltage across pin 1 and 2 of the actuator See N075 THROTTLE BODY ACTUATOR [→939004460] is greater than 11 V. Move on to Step 6 | Move on to Step 5 |
| 5 | If faults are found, restore the wiring between the engine control unit and the throttle body actuator See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] Replace the wiring if necessary The test can be considered over | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |
| 6 | Press the START/STOP button. Disconnect the wiring harness connector from engine control unit connector B Press the START/STOP button. Check that the voltage across pin 59 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and the earth is greater than 0.3 V. | Repair or if necessary replace the electrical wiring between the engine control unit and the throttle body actuator See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 7 | Check that the voltage across pin 52 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and the earth is greater than 0.3 V. | Repair or if necessary replace the electrical wiring between the engine control unit and the throttle body actuator See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 8 | Press the START/STOP button. Check that the voltage across pin 59 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and the earth is more than 500 kOhm. | Repair or if necessary replace the electrical wiring between the engine control unit and the throttle body actuator See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 9 | Check that the voltage across pin 52 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and the earth is more than 500 kOhm. | Repair or if necessary replace the electrical wiring between the engine control unit and the throttle body actuator See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 10 | Check that the voltage across pin 59 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and pin 6 of the actuator See N075 THROTTLE BODY ACTUATOR [→939004460] is less than 5 Ohms | Repair or if necessary replace the electrical wiring between the engine control unit and the throttle body actuator See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 11 | Check that the voltage across pin 52 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and pin 4 of the actuator See N075 THROTTLE BODY ACTUATOR [→939004460] is less than 5 Ohms | Repair or if necessary replace the electrical wiring between the engine control unit and the throttle body actuator See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 12 | Remove the throttle body. Op. 1060G50 THROTTLE BODY - R.R [→939010571] and check for machining swarf or dirt blocking movement of the motorised throttle | Clean the throttle body using a brush dipped in diesel to dissolve the dirt and remove any swarf |
| 13 | Replace the throttle body. Op. 1060G50 THROTTLE BODY - R.R [→939010571] and check the fault has disappeared | Repair the original throttle body and replace the engine control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |

## 1060GP CHECK ENGINE CONTROL UNIT CONNECTIONS  [939010196]
- Path: Test > 10 ENGINE > 1060 DIESEL INJECTION SYSTEM > 1060G DIESEL INJECTION PRESSURE PUMP ELECTRONIC CONTROL > 1060GP CHECK ENGINE CONTROL UNIT CONNECTIONS
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010196

| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Press the START/STOP button and turn off the engine. Disconnect the wiring harness connector from the FAP differential pressure sensor. Press the START/STOP button. Select the following system on the diagnostic instrument: Electronic diesel injection system EDC16C39. Check that error P0697 – Sensor 3 power supply 3 is “Present” | Replace the differential pressure sensor Op. 1080B82 PARTICULATE FILTER DIFFERENTIAL PRESSURE (D.P.F.) SENSOR - R R [→939010626] |
| 2 | Press the START/STOP button. Disconnect the wiring harness connector from the linear sensor. See K120 LINEAR SENSOR FOR FANS [→939004261] Press the START/STOP button. Select the following system on the diagnostic equipment: Diesel EDC16C39 electronic injection system. Check that error P0697 – Power supply to sensors 3 is “Present”. | Replace the linear sensor **Op. 5040B20** |
| 3 | Press the START/STOP button. Disconnect the wiring harness connector from engine control unit connector A Press the START/STOP button. Check that the voltage across pin 44 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and the earth is greater than 0.3 V. | Repair or if necessary replace the electrical wiring between the FAP differential pressure sensor and the engine control unit See E5070 PARTICLE FILTER SYSTEM [→939011783] |
| 4 | Press the START/STOP button. Check that the voltage across pin 44 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and the earth is more than 500 kOhm. | Repair or if necessary replace the electrical wiring between the FAP differential pressure sensor and the engine control unit See E5070 PARTICLE FILTER SYSTEM [→939011783] |
| 5 | Press the START/STOP button. Check that the voltage across pin 22 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and the earth is greater than 0.3 V. | Repair or if necessary replace the electrical wiring between the linear sensor and the engine control unit See E6021 COMPRESSOR ENGAGEMENT - DESCRIPTION [→939005822] |
| 6 | Press the START/STOP button. Check that the voltage across pin 22 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and the earth is more than 500 kOhm. | Repair or if necessary replace the electrical wiring between the linear sensor and the engine control unit See E6021 COMPRESSOR ENGAGEMENT - DESCRIPTION [→939005822] |
| 7 | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |  |

## 1060GQ CHECK OPERATION OF SENSOR DETECTING PRESENCE OF WATER IN DIESEL FILTER  [939010197]
- Path: Test > 10 ENGINE > 1060 DIESEL INJECTION SYSTEM > 1060G DIESEL INJECTION PRESSURE PUMP ELECTRONIC CONTROL > 1060GQ CHECK OPERATION OF SENSOR DETECTING PRESENCE OF WATER IN DIESEL FILTER
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010197

| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Press the START/STOP button and turn off the engine. Clean the diesel filter and replace if necessary Op. 1044B10 FUEL FILTER ASSEMBLY - R + R OR REPLACE [→939010509] Press the START/STOP button. Select the following system on the diagnostic instrument: Electronic diesel injection system EDC16C39. Check that error P2264 – Water in diesel filter is “Present” | Water present in diesel filter Check there is no water in the fuel tank. Clean the tank if necessary |
| 2 | Press the START/STOP button. Disconnect the wiring harness connector from the temperature sensor and fuel heater coil and from engine control unit connector A. Press the START/STOP button. Check that the voltage across pin 5 of the control unit **See K100** and the earth is greater than 0.3 V. | Repair or if necessary replace the electrical wiring between the water presence sensor and the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 3 | Press the START/STOP button. Check that the resistance across Pin 5 of the sensor **See K100** and the earth is more than 500 kOhm. | Repair or if necessary replace the electrical wiring between the water presence sensor and the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 4 | Check that the resistance across pin 5 of the sensor **See K100** and pin 74 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] is less than 5 Ohms | Repair or if necessary replace the electrical wiring between the water presence sensor and the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 5 | Connect a shunt cable with fuse between pin 72 of control unit connector A See M010 ENGINE MANAGEMENT ECU [→939004314] and the earth. Check that the voltage across pin 3 of the control unit **See K100** and the earth is greater than 11 V. | Repair or if necessary replace the electrical wiring between the water presence sensor and the engine compartment junction unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 6 | Check that the resistance across pin 4 of the sensor **See K100** and the earth is greater than 5 Ohms. | Repair or if necessary replace the electrical wiring between the water presence sensor and earth See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 7 | Replace the water presence sensor Op. 1060G30 WATER PRESENCE SENSOR IN FUEL FILTER - R.R. [→939010569] | Repair the original sensor and replace the engine control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |

## 1060GR CHECK OPERATION OF FUEL PRESSURE SENSOR ON RAIL  [939010198]
- Path: Test > 10 ENGINE > 1060 DIESEL INJECTION SYSTEM > 1060G DIESEL INJECTION PRESSURE PUMP ELECTRONIC CONTROL > 1060GR CHECK OPERATION OF FUEL PRESSURE SENSOR ON RAIL
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010198

| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Press the START/STOP button and turn off the engine. Disconnect the wiring harness connector from the fuel pressure regulator on the rail. Press the START/STOP button. Check that the voltage across pin 2 of the governor See N087 FUEL PRESSURE REGULATOR ON RAIL [→939004482] and the earth is greater than 11 V. Move on to Step 4 | Move on to Step 2 |
| 2 | Press the START/STOP button. Disconnect the cable loom connector from the engine management control unit connector A. In the engine compartment junction unit, remove relay T9 (in the middle of the lower row) Connect a bridge with a fuse to Pins 30 and 87 of the socket for relay T9. Check that the voltage across pin 1 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] and the earth is greater than 11 V. | Repair or if necessary replace the electrical wiring between the engine compartment junction unit and the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 3 | If faults are found, restore the wiring between the engine compartment junction unit and the engine compartment junction unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] Replace it if necessary. The test can be considered over | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |
| 4 | Press the START/STOP button. Disconnect the wiring harness connector from engine control unit connector B Press the START/STOP button. Check that the voltage across Pin 1 of the regulator See N087 FUEL PRESSURE REGULATOR ON RAIL [→939004482] and the earth is greater than 0.3 V. | Repair or if necessary replace the electrical wiring between the engine compartment junction unit and the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 5 | Press the START/STOP button. Check that the resistance across pin 1 of the regulator See N087 FUEL PRESSURE REGULATOR ON RAIL [→939004482] and the earth is more than 500 kOhm. | Repair or if necessary replace the electrical wiring between the engine compartment junction unit and the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 6 | Check that the resistance across pin 1 of the regulator See N087 FUEL PRESSURE REGULATOR ON RAIL [→939004482] and Pin 34 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] is less than 5 Ohms | Repair or if necessary replace the electrical wiring between the engine compartment junction unit and the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 7 | Replace the pressure regulator Op. 1060G28 FUEL PRESSURE SENSOR ON FUEL MANIFOLD TO INJECTORS - R.R [→939010568] | Repair the original regulator and replace the engine control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |

## 1060GS DEBIMETER OPERATION CHECK  [939010199]
- Path: Test > 10 ENGINE > 1060 DIESEL INJECTION SYSTEM > 1060G DIESEL INJECTION PRESSURE PUMP ELECTRONIC CONTROL > 1060GS DEBIMETER OPERATION CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010199

| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Press the START/STOP button and turn off the engine. Disconnect the wiring harness connector from the air flow meter. Press the START/STOP button. Check that the voltage across pin 1 of the meter See K041 AIR FLOW METER [→939004191] and the earth is greater than 11 V. Move on to Step 3 | Move on to Step 2 |
| 2 | If faults are found, restore the wiring between the engine compartment junction unit and the debimeter See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] Replace it if necessary. The test can be considered over | Replace the junction unit Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] |
| 3 | Check that the voltage across pin 1 and 2 of the meter See K041 AIR FLOW METER [→939004191] Replace the wiring if necessary is greater than 11 V. Move on to Step 5 | Move on to Step 4 |
| 4 | If faults are found, restore the wiring between the engine control unit and the debimeter See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] Replace it if necessary. The test can be considered over | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |
| 5 | Check that the voltage across pin 3 of the meter See K041 AIR FLOW METER [→939004191] and earth is between 4.8 and 5.2 V | Move on to Step 4 |
| 6 | Replace the debimeter Op. 1060G10 AIR FLOW METER - R.R. [→939010563] | Repair the original debimeter and replace the engine management control unit. Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |

## 1060GK CHECK CONTROL UNIT SOFTWARE AND HARDWARE  [939010200]
- Path: Test > 10 ENGINE > 1060 DIESEL INJECTION SYSTEM > 1060G DIESEL INJECTION PRESSURE PUMP ELECTRONIC CONTROL > 1060GK CHECK CONTROL UNIT SOFTWARE AND HARDWARE
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010200

| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Check error U1706 is not present – CAN network (NCM – NFR) | Replace the ABS control unit Op. 3340A20 ABS ELECTRONIC CONTROL UNIT - R+R [→939010775] |
| 2 | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |  |

## 1060GF SUPERCHARGING PRESSURE CHECK  [939010201]
- Path: Test > 10 ENGINE > 1060 DIESEL INJECTION SYSTEM > 1060G DIESEL INJECTION PRESSURE PUMP ELECTRONIC CONTROL > 1060GF SUPERCHARGING PRESSURE CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010201

| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Fit the key in the ignition. With the engine off and all users off, the Target Turbo Pressure must be within a range between 0.9 and 1.2 bars. Under the same conditions, the Measured Turbo Pressure must be in a range between 0.9 and 1.2 bars and in any case must be approximately equal to external pressure | Move on to Step 6 |
| 2 | With the engine idling and accelerator pedal not operated, the Target Turbo Pressure must be within a range between 0.9 and 1.2 bars. Under the same conditions, the Measured Turbo Pressure must be within a range between 0.9 and 1.2 bars. | Move on to Step 6 |
| 3 | Under the same conditions, overboost valve closure should be in the range beween 70 and 80% | Continue with the test See Test 1064BB CHECK ON OPERATION OF SUPERCHARGING PRESSURE SOLENOID VALVE (PIERBURG) [→939010216 1064BB CHECK ON OPERATION OF SUPERCHARGING PRESSURE SOLENOID VALVE (PIERBURG)] |
| 4 | With the accelerator pedal slightly operated and engine speed equal to 3000 rpm, the Target Turbo Pressure must be within a range between 10 and 23 bars. Under the same conditions, the Measured Turbo Pressure must be within a range between 10 and 23 bars. | Move on to Step 6 |
| 5 | With the accelertor pedal operated several times, overboost valve closure must be less than 70%: the reading should alter quickly. The test can be considered over | Continue with the test See Test 1064BB CHECK ON OPERATION OF SUPERCHARGING PRESSURE SOLENOID VALVE (PIERBURG) [→939010216 1064BB CHECK ON OPERATION OF SUPERCHARGING PRESSURE SOLENOID VALVE (PIERBURG)] |
| 6 | Press the START/STOP button and turn off the engine. Disconnect the wiring harness connector from the fuel pressure sensor. Press the START/STOP button. Measure the voltage between regulator Pins 2 and 1 See N087 FUEL PRESSURE REGULATOR ON RAIL [→939004482] Ensure that it is in a range between 4.8 and 5.2 V. | Move on to Step 8 |
| 7 | If faults are present, repair or if necessary replace the electrical wiring between the engine control unit and the sensor See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] The test can be considered over | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |
| 8 | Measure the voltage between sensor Pin 3 See K083 FUEL PRESSURE SENSOR [→939004238] and earth. Ensure that it is in a range between 4.9 and 6.0 V. | Move on to Step 7 |
| 9 | With the tester in Parameter mode, display the Measured Turbo Pressure Ensure it is in a range between 4.8 and 5.2 V | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |
| 10 | Connect a shunt cable with a fuse between sensor Pin 3 See K083 FUEL PRESSURE SENSOR [→939004238] and the earth. Check that now the Measured Turbo Pressure is less than 0.3 V | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |
| 11 | Replace the fuel pressure sensor Op. 1060G28 FUEL PRESSURE SENSOR ON FUEL MANIFOLD TO INJECTORS - R.R [→939010568] |  |

## 1060O DIESEL FUEL INJECTION SYSTEM TESTS  [939010202]
- Path: Test > 10 ENGINE > 1060 DIESEL INJECTION SYSTEM > 1060O DIESEL FUEL INJECTION SYSTEM TESTS
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010202
- Subtopics: 1060OA CHECK ON RETURN LOW PRESSURE FUEL CIRCUIT [939010203]; 1060OB CHECK ON SUPPLY LOW PRESSURE FUEL CIRCUIT [939010204]; 1060OC INJECTORS SEAL TEST [939010205]; 1060OD INSPECTION OF THE HIGH PRESSURE FUEL CIRCUIT [939010206]; 1060OE CHECK ON OPERATION OF COOLANT TEMPERATURE SENSOR [939010207]

## 1060OA CHECK ON RETURN LOW PRESSURE FUEL CIRCUIT  [939010203]
- Path: Test > 10 ENGINE > 1060 DIESEL INJECTION SYSTEM > 1060O DIESEL FUEL INJECTION SYSTEM TESTS > 1060OA CHECK ON RETURN LOW PRESSURE FUEL CIRCUIT
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010203

Connect the diagnostic equipment pressure transducer to the return pipe to the tank (1a).
Within 30 seconds check that the pressure reading on the gauge is less than 1 bar.
[image: https://sloeber94.github.io/elrnDB/media/939003058.jpg]

> Note: The fuel pump in the tank should switch off after 30 seconds.
> Note: Make sure that the taps and the adjustment screws at the side of the pressure gauge are open (except the ones on ducts not connected to the system).

## 1060OB CHECK ON SUPPLY LOW PRESSURE FUEL CIRCUIT  [939010204]
- Path: Test > 10 ENGINE > 1060 DIESEL INJECTION SYSTEM > 1060O DIESEL FUEL INJECTION SYSTEM TESTS > 1060OB CHECK ON SUPPLY LOW PRESSURE FUEL CIRCUIT
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010204

Connect the diagnostic equipment pressure transducer between the diesel filter (1a) and the pressure pump (1b) (connect it to the filter outlet).
Press the START/STOP button.
Within 30 seconds, check that the pressure reading on the gauge is between 2 and 3 bar.
[image: https://sloeber94.github.io/elrnDB/media/939003059.jpg]

> Note: The fuel pump in the tank should switch off after 30 seconds.
> Note: Make sure that the taps and the adjustment screws at the side of the pressure gauge are open (except the ones on ducts not connected to the system).

## 1060OC INJECTORS SEAL TEST  [939010205]
- Path: Test > 10 ENGINE > 1060 DIESEL INJECTION SYSTEM > 1060O DIESEL FUEL INJECTION SYSTEM TESTS > 1060OC INJECTORS SEAL TEST
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010205

Disconnect the electrical connections from all the injectors.
1. Disconnect the fuel recirculation pipes from all the injectors.
[image: https://sloeber94.github.io/elrnDB/media/939003060.jpg]

> Note: Constrict the pipe so that no fuel comes out during the test.
Press the START/STOP and check visually that the quantity of recirculated fuel leaving the injector connections are approximately the same and small in amount

## 1060OD INSPECTION OF THE HIGH PRESSURE FUEL CIRCUIT  [939010206]
- Path: Test > 10 ENGINE > 1060 DIESEL INJECTION SYSTEM > 1060O DIESEL FUEL INJECTION SYSTEM TESTS > 1060OD INSPECTION OF THE HIGH PRESSURE FUEL CIRCUIT
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010206

Disconnect the electrical connections from all the injectors.
1. Disconnect the fuel recirculation pipes from all the injectors.
[image: https://sloeber94.github.io/elrnDB/media/939003061.jpg]

> Note: Constrict the pipe so that no fuel comes out during the test.
Connect the tester.
Display the "measured diesel pressure" and "engine rpm" parameters on the "Control Unit Test" parameters screen.
Press the START/STOP button and check that the fuel pressure is greater than 300 bar with engine rpm higher than 200 rpm.

## 1060OE CHECK ON OPERATION OF COOLANT TEMPERATURE SENSOR  [939010207]
- Path: Test > 10 ENGINE > 1060 DIESEL INJECTION SYSTEM > 1060O DIESEL FUEL INJECTION SYSTEM TESTS > 1060OE CHECK ON OPERATION OF COOLANT TEMPERATURE SENSOR
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010207

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Start the engine, allow to warm up and adjust to idle speed. Turn off all the electrical users. Turn off all the cooling fans. Check that the coolant temperature reading on the diagnostic instrument is more or less the same as the temperature shown on the instrument panel. The test can be considered over | Move on to Step 2 |
| 2 | Turn the ignition key OFF. Disconnect the wiring harness connector from the engine temperature sending unit See K036 ENGINE COOLANT TEMPERATURE SENSOR/SENDER UNIT [→939004185] Turn the ignition key ON. Measure the voltage between Pin 2 of the sending unit and Earth, checking it is within a range between 4.8 and 5.2 V. See K036 ENGINE COOLANT TEMPERATURE SENSOR/SENDER UNIT [→939004185] Move on to Step 4 | Move on to Step 3 |
| 3 | If faults are present, repair or if necessary replace the electrical wiring between the engine control unit and the temperature sending unit. See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] The test can be considered over | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |
| 4 | Check that the reading for coolant temperature on the diagnostic instrument is between 4.8 and 5.2 V | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |
| 5 | Connect a shunt cable fitted with a fuse between pins 1 and 2 of the sending unit See K036 ENGINE COOLANT TEMPERATURE SENSOR/SENDER UNIT [→939004185] Check that the reading for coolant temperature on the diagnostic instrument is greater than 0.1 V. Move on to Step 3 | Replace the coolant temperature sensor Op. 1060G14 ENGINE COOLANT TEMPERATURE SENSOR - R.R. [→939010564] |

## 1060F INJECTORS AND PIPES  [939010208]
- Path: Test > 10 ENGINE > 1060 DIESEL INJECTION SYSTEM > 1060F INJECTORS AND PIPES
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010208
- Subtopics: 1060FA INJECTOR OPERATION CHECK [939010209]; 1060FA INJECTOR OPERATION CHECK [939010210]; 1060FB INJECTOR CIRCUIT OPERATION CHECK [939010211]; 1060FB INJECTOR CIRCUIT OPERATION CHECK [939010212]

## 1060FA INJECTOR OPERATION CHECK  [939010209]
- Path: Test > 10 ENGINE > 1060 DIESEL INJECTION SYSTEM > 1060F INJECTORS AND PIPES > 1060FA INJECTOR OPERATION CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010209

> Note: Proceed as follows on the injector presumed to be faulty.
| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Press the START/STOP button and turn off the engine. Disconnect the wiring harness connector from engine control unit connector B Press the START/STOP button. Check that the resistance between Earth and: Pin 16 of the control unit for injector 1 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 2 of the control unit for injector 2 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 1 of the control unit for injector 3 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 17 of the control unit for injector 4 See M010 ENGINE MANAGEMENT ECU [→939004314] is less than 0.3 V | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 2 | Press the START/STOP button. Check that the resistance between Earth and: Pin 16 of the control unit for injector 1 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 2 of the control unit for injector 2 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 1 of the control unit for injector 3 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 17 of the control unit for injector 4 See M010 ENGINE MANAGEMENT ECU [→939004314] is greater than 500 kOhms Move on to Step 6 | Move on to Step 3 |
| 3 | Disconnect the wiring harness connector from the injector. Check that the resistance between Earth and: Pin 16 of the control unit for injector 1 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 2 of the control unit for injector 2 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 1 of the control unit for injector 3 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 17 of the control unit for injector 4 See M010 ENGINE MANAGEMENT ECU [→939004314] is greater than 500 kOhms | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 4 | Check that the resistance between Earth and: Pin 47 of the control unit for injector 1 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 31 of the control unit for injector 2 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 46 of the control unit for injector 3 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 33 of the control unit for injector 4 See M010 ENGINE MANAGEMENT ECU [→939004314] is greater than 500 kOhms | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 5 | Replace the injector The test can be considered over |  |
| 6 | Disconnect the wiring harness connector from the injector. Check that the resistance across: Pin 16 and 47 of the control unit for injector 1 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 2 and 31 of the control unit for injector 2 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 1 and 46 of the control unit for injector 3 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 17 and 33 of the control unit for injector 4 See M010 ENGINE MANAGEMENT ECU [→939004314] is greater than 500 kOhms | Repair or if necessary replace the electrical wiring of the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 7 | Check that the resistance across pin 1 of the injector See N070 INJECTOR [→939004444] and: Pin 16 of the control unit for injector 1 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 2 of the control unit for injector 2 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 1 of the control unit for injector 3 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 17 of the control unit for injector 4 See M010 ENGINE MANAGEMENT ECU [→939004314] is less than 5 Ohms | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 8 | Check that the resistance across pin 2 of the injector See N070 INJECTOR [→939004444] and: Pin 47 of the control unit for injector 1 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 31 of the control unit for injector 2 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 46 of the control unit for injector 3 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 33 of the control unit for injector 4 See M010 ENGINE MANAGEMENT ECU [→939004314] is less than 5 Ohms | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 9 | Check that the resistance across pin 1 and 2 of the injector See N070 INJECTOR [→939004444] is between 0.3 and 0.7 Ohms | Replace the injector |
| 10 | Carry out a visual check on the condition of the injector and connector pipes to ensure it is OK | Replace the faulty component |
| 11 | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |  |

## 1060FA INJECTOR OPERATION CHECK  [939010210]
- Path: Test > 10 ENGINE > 1060 DIESEL INJECTION SYSTEM > 1060F INJECTORS AND PIPES > 1060FA INJECTOR OPERATION CHECK
- Kind: test / check procedure
- Applies to: engines: 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010210

> Note: Proceed as follows on the injector presumed to be faulty.
| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Press the START/STOP button and turn off the engine. Disconnec the wiring harness connector from engine control unit connector B. Press the START/STOP pushbutton. Check that the voltage across Earth and: Pin 16 of the control unit for injector 1 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 2 of the control unit for injector 2 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 1 of the control unit for injector 3 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 17 of the control unit for injector 4 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 18 of the control unit for injector 5 See M010 ENGINE MANAGEMENT ECU [→939004314] is less than 0.3 V | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 2 | Press the START/STOP button. Check that the resistance between Earth and: Pin 16 of the control unit for injector 1 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 2 of the control unit for injector 2 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 1 of the control unit for injector 3 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 17 of the control unit for injector 4 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 18 of the control unit for injector 5 See M010 ENGINE MANAGEMENT ECU [→939004314] is greater than 500 kOhms Move on to Step 6 | Move on to Step 3 |
| 3 | Disconnect the wiring harness connector from the injector. Check that the resistance between Earth and: Pin 16 of the control unit for injector 1 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 2 of the control unit for injector 2 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 1 of the control unit for injector 3 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 17 of the control unit for injector 4 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 18 of the control unit for injector 5 See M010 ENGINE MANAGEMENT ECU [→939004314] is greater than 500 kOhms | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 4 | Check that the resistance between Earth and: Pin 47 of the control unit for injector 1 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 31 of the control unit for injector 2 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 46 of the control unit for injector 3 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 33 of the control unit for injector 4 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 48 of the control unit for injector 5 See M010 ENGINE MANAGEMENT ECU [→939004314] is greater than 500 kOhms | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 5 | Replace the injector The test can be considered over |  |
| 6 | Disconnect the wiring harness connector from the injector. Check that the resistance across: Pin 16 and 47 of the control unit for injector 1 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 2 and 31 of the control unit for injector 2 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 1 and 46 of the control unit for injector 3 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 17 and 33 of the control unit for injector 4 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 18 and 48 of the control unit for injector 5 See M010 ENGINE MANAGEMENT ECU [→939004314] is greater than 500 kOhms | Repair or if necessary replace the electrical wiring of the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 7 | Check that the resistance across pin 1 of the injector See N070 INJECTOR [→939004444] and: Pin 16 of the control unit for injector 1 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 2 of the control unit for injector 2 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 1 of the control unit for injector 3 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 17 of the control unit for injector 4 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 18 of the control unit for injector 5 See M010 ENGINE MANAGEMENT ECU [→939004314] is less than 5 Ohms | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 8 | Check that the resistance across pin 2 of the injector See N070 INJECTOR [→939004444] and: Pin 47 of the control unit for injector 1 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 31 of the control unit for injector 2 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 46 of the control unit for injector 3 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 33 of the control unit for injector 4 See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 48 of the control unit for injector 5 See M010 ENGINE MANAGEMENT ECU [→939004314] is less than 5 Ohms | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 9 | Check that the resistance across pin 1 and 2 of the injector See N070 INJECTOR [→939004444] is between 0.3 and 0.7 Ohms | Replace the injector |
| 10 | Carry out a visual check on the condition of the injector and connector pipes to ensure it is OK | Replace the faulty component |
| 11 | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |  |

## 1060FB INJECTOR CIRCUIT OPERATION CHECK  [939010211]
- Path: Test > 10 ENGINE > 1060 DIESEL INJECTION SYSTEM > 1060F INJECTORS AND PIPES > 1060FB INJECTOR CIRCUIT OPERATION CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010211

| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Check whether any of the errors are present using the diagnostic equipment: P2149 – Unit 2 injector control (injectors 2-3) P2151 – Unit 2 injector control (injectors 2-3) Move on to Step 21 | Move on to Step 2 |
| 2 | Press the START/STOP button and turn on the panel. Check that the voltage across Pin 2 of engine control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and earth is greater than 0.3 V. | Repair or if necessary replace the electrical wiring between the engine control unit and injector 2 See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 3 | Press the START/STOP button. Check that the resistance across pin 2 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and earth is greater than 500 kOhm. Continue to Step 7 | Move on to Step 4 |
| 4 | Disconnect the wiring harness connector from injector 2. Check that the resistance across pin 2 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and Earth is more than 500 kOhm. | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 5 | Check that the resistance across pin 31 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and Earth is more than 500 kOhm. | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 6 | Replace the injector. The test is complete |  |
| 7 | Disconnect the wiring harness connector from injector 2. Check that the resistance across pin 2 and 31 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] is greater than 500 kOhms | Repair or if necessary replace the electrical wiring of the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 8 | Check that the resistance across pin 2 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 1 of injector 2 See N070 INJECTOR [→939004444] is less than 5 Ohms | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 9 | Check that the resistance across pin 31 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 2 of injector 2 See N070 INJECTOR [→939004444] is less than 5 Ohms | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 10 | Check that the resistance across pins 1 and 2 of injector 2 See N070 INJECTOR [→939004444] is between 0.3 and 0.7 Ohms | Replace the injector |
| 11 | Press the START/STOP button. Check that the voltage across Pin 1 of engine control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and earth is greater than 0.3 V. | Repair or if necessary replace the electrical wiring between the engine control unit and injector 3 See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 12 | Press the START/STOP button. Check that the resistance across pin 1 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and Earth is more than 500 kOhm. Move on to Step 16 | Move on to Step 13 |
| 13 | Disconnect the wiring harness connector from injector 3. Check that the resistance across pin 1 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and Earth is more than 500 kOhm. | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 14 | Check that the resistance across pin 46 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and Earth is more than 500 kOhm. | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 15 | Replace the injector. The test can be considered over |  |
| 16 | Disconnect the wiring harness connector from injector 3. Check that the resistance across pin 1 and 46 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] is greater than 500 kOhms | Repair or if necessary replace the electrical wiring of the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 17 | Check that the resistance across pin 1 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 1 of injector 3 See N070 INJECTOR [→939004444] is less than 5 Ohms | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 18 | Check that the resistance across pin 46 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 2 of injector 3 See N070 INJECTOR [→939004444] is less than 5 Ohms | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 19 | Check that the resistance across pins 1 and 2 of injector 3 See N070 INJECTOR [→939004444] is between 0.3 and 0.7 Ohms | Replace the injector |
| 20 | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] The test can be considered over |  |
| 21 | Press the START/STOP button and turn on the panel. Check that the voltage across Pin 16 of engine control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and the earth is greater than 0.3 V. | Repair or if necessary replace the electrical wiring between the engine control unit and injector 1 See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 22 | Press the START/STOP button. Check that the resistance across pin 16 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and Earth is more than 500 kOhm. Move on to Step 26 | Move on to Step 23 |
| 23 | Disconnect the wiring harness connector from injector 1. Check that the resistance across pin 16 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and Earth is more than 500 kOhm. | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 24 | Check that the resistance across pin 47 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and Earth is more than 500 kOhm. | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 25 | Replace the injector. The test can be considered over |  |
| 26 | Disconnect the wiring harness connector from injector 1. Check that the resistance across pin 16 and 47 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] is greater than 500 kOhms | Repair or if necessary replace the electrical wiring of the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 27 | Check that the resistance across pin 16 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 1 of injector 1 See N070 INJECTOR [→939004444] is less than 5 Ohms | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 28 | Check that the resistance across pin 47 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 2 of injector 1 See N070 INJECTOR [→939004444] is less than 5 Ohms | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 29 | Check that the resistance across pins 1 and 2 of injector 1 See N070 INJECTOR [→939004444] is between 0.3 and 0.7 Ohms | Replace the injector |
| 30 | Press the START/STOP button. Check that the voltage across Pin 17 of engine control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and earth is greater than 0.3 V. | Repair or if necessary replace the electrical wiring between the engine control unit and injector 4 See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 31 | Press the START/STOP button. Check that the resistance across pin 17 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and Earth is more than 500 kOhm. Move on to Step 35 | Move on to Step 32 |
| 32 | Disconnect the wiring harness connector from injector 4. Check that the resistance across pin 17 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and Earth is more than 500 kOhm. | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 33 | Check that the resistance across pin 33 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and Earth is more than 500 kOhm. | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 34 | Replace the injector. The test is complete |  |
| 35 | Disconnect the wiring harness connector from injector 4. Check that the resistance across pin 17 and 33 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] is greater than 500 kOhms | Repair or if necessary replace the electrical wiring of the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 36 | Check that the resistance across pin 17 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 1 of injector 4 See N070 INJECTOR [→939004444] is less than 5 Ohms | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 37 | Check that the resistance across pin 33 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 2 of injector 4 See N070 INJECTOR [→939004444] is less than 5 Ohms | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 38 | Check that the resistance across pins 1 and 2 of injector 4 See N070 INJECTOR [→939004444] is between 0.3 and 0.7 Ohms | Replace the injector |
| 39 | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |  |

## 1060FB INJECTOR CIRCUIT OPERATION CHECK  [939010212]
- Path: Test > 10 ENGINE > 1060 DIESEL INJECTION SYSTEM > 1060F INJECTORS AND PIPES > 1060FB INJECTOR CIRCUIT OPERATION CHECK
- Kind: test / check procedure
- Applies to: engines: 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010212

| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Check whether any of the errors are present using the diagnostic equipment: P2149 – Unit 2 injector control (injectors 2-5) P2151 – Unit 2 injector control (injectors 2-5) Move on to Step 21 | Move on to Step 2 |
| 2 | Press the START/STOP button and turn on the panel. Check that the voltage across Pin 2 of engine control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and earth is greater than 0.3 V. | Repair or if necessary replace the electrical wiring between the engine control unit and injector 2 See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 3 | Press the START/STOP button. Check that the resistance across pin 2 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and earth is greater than 500 kOhm. Continue to Step 7 | Move on to Step 4 |
| 4 | Disconnect the wiring harness connector from injector 2. Check that the resistance across pin 2 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and Earth is more than 500 kOhm. | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 5 | Check that the resistance across pin 31 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and Earth is more than 500 kOhm. | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 6 | Replace the injector. The test is complete |  |
| 7 | Disconnect the wiring harness connector from injector 2. Check that the resistance across pin 2 and 31 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] is greater than 500 kOhms | Repair or if necessary replace the electrical wiring of the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 8 | Check that the resistance across pin 2 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 1 of injector 2 See N070 INJECTOR [→939004444] is less than 5 Ohms | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 9 | Check that the resistance across pin 31 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 2 of injector 2 See N070 INJECTOR [→939004444] is less than 5 Ohms | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 10 | Check that the resistance across pins 1 and 2 of injector 2 See N070 INJECTOR [→939004444] is between 0.3 and 0.7 Ohms | Replace the injector |
| 11 | Press the START/STOP button. Check that the voltage across Pin 18 of engine control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and earth is greater than 0.3 V. | Repair or if necessary replace the electrical wiring between the engine control unit and injector 3 See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 12 | Press the START/STOP button. Check that the resistance across pin 18 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and Earth is more than 500 kOhm. Move on to Step 16 | Move on to Step 13 |
| 13 | Disconnect the wiring harness connector from injector 3. Check that the resistance across pin 18 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and Earth is more than 500 kOhm. | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 14 | Check that the resistance across pin 48 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and Earth is more than 500 kOhm. | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 15 | Replace the injector. The test can be considered over |  |
| 16 | Disconnect the wiring harness connector from injector 5. Check that the resistance across pin 18 and 48 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] is greater than 500 kOhms | Repair or if necessary replace the electrical wiring of the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 17 | Check that the resistance across pin 18 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 1 of injector 3 See N070 INJECTOR [→939004444] is less than 5 Ohms | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 18 | Check that the resistance across pin 48 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 2 of injector 5 See N070 INJECTOR [→939004444] is less than 5 Ohms | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 19 | Check that the resistance across pins 1 and 2 of injector 5 See N070 INJECTOR [→939004444] is between 0.3 and 0.7 Ohms | Replace the injector |
| 20 | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] The test can be considered over |  |
| 21 | Press the START/STOP button and turn on the panel. Check that the voltage across Pin 16 of engine control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and the earth is greater than 0.3 V. | Repair or if necessary replace the electrical wiring between the engine control unit and injector 1 See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 22 | Press the START/STOP button. Check that the resistance across pin 16 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and Earth is more than 500 kOhm. Move on to Step 26 | Move on to Step 23 |
| 23 | Disconnect the wiring harness connector from injector 1. Check that the resistance across pin 16 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and Earth is more than 500 kOhm. | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 24 | Check that the resistance across pin 47 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and Earth is more than 500 kOhm. | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 25 | Replace the injector. The test can be considered over |  |
| 26 | Disconnect the wiring harness connector from injector 1. Check that the resistance across pin 16 and 47 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] is greater than 500 kOhms | Repair or if necessary replace the electrical wiring of the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 27 | Check that the resistance across pin 16 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 1 of injector 1 See N070 INJECTOR [→939004444] is less than 5 Ohms | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 28 | Check that the resistance across pin 47 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 2 of injector 1 See N070 INJECTOR [→939004444] is less than 5 Ohms | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 29 | Check that the resistance across pins 1 and 2 of injector 1 See N070 INJECTOR [→939004444] is between 0.3 and 0.7 Ohms | Replace the injector |
| 30 | Press the START/STOP button. Check that the voltage across Pin 1 of engine control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and earth is greater than 0.3 V. | Repair or if necessary replace the electrical wiring between the engine control unit and injector 3 See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 31 | Press the START/STOP button. Check that the resistance across pin 1 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and Earth is more than 500 kOhm. Move on to Step 36 | Move on to Step 32 |
| 32 | Disconnect the wiring harness connector from injector 3. Check that the resistance across pin 1 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and Earth is more than 500 kOhm. | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 33 | Check that the resistance across pin 46 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and Earth is more than 500 kOhm. | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 34 | Replace the injector. The test is complete |  |
| 35 | Disconnect the wiring harness connector from injector 3. Check that the resistance across pin 1 and 46 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] is greater than 500 kOhms | Repair or if necessary replace the electrical wiring of the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 36 | Check that the resistance across pin 1 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 1 of injector 3 See N070 INJECTOR [→939004444] is less than 5 Ohms | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 37 | Check that the resistance across pin 46 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 2 of injector 3 See N070 INJECTOR [→939004444] is less than 5 Ohms | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 38 | Check that the resistance across pins 1 and 2 of injector 3 See N070 INJECTOR [→939004444] is between 0.3 and 0.7 Ohms | Replace the injector |
| 39 | Press the START/STOP button. Check that the voltage across Pin 17 of engine control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and earth is greater than 0.3 V. | Repair or if necessary replace the electrical wiring between the engine control unit and injector 4 See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 40 | Press the START/STOP button. Check that the resistance across pin 17 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and Earth is more than 500 kOhm. Move on to Step 44 | Move on to Step 41 |
| 41 | Disconnect the wiring harness connector from injector 4. Check that the resistance across pin 17 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and Earth is more than 500 kOhm. | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 42 | Check that the resistance across pin 33 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] and Earth is more than 500 kOhm. | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 43 | Replace the injector. The test can be considered over |  |
| 44 | Check that the resistance across pin 17 and 33 of the control unit See M010 ENGINE MANAGEMENT ECU [→939004314] is greater than 500 kOhms | Repair or if necessary replace the electrical wiring between the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 45 | Check that the resistance across pin 17 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 1 of injector 4 See N070 INJECTOR [→939004444] is less than 5 Ohms | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 46 | Check that the resistance across pin 33 of control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] Pin 2 of injector 4 See N070 INJECTOR [→939004444] is less than 5 Ohms | Repair or if necessary replace the electrical wiring between the engine control unit and the injector See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 47 | Check that the resistance across pins 1 and 2 of injector 4 See N070 INJECTOR [→939004444] is between 0.3 and 0.7 Ohms | Replace the injector |
| 48 | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |  |

## 1064 ENGINE SUPERCHARGING SYSTEM  [939010213]
- Path: Test > 10 ENGINE > 1064 ENGINE SUPERCHARGING SYSTEM
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010213
- Subtopics: 1064B CONTROL/SAFETY DEVICES [939010214]

## 1064B CONTROL/SAFETY DEVICES  [939010214]
- Path: Test > 10 ENGINE > 1064 ENGINE SUPERCHARGING SYSTEM > 1064B CONTROL/SAFETY DEVICES
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010214
- Subtopics: 1064BA SUPRECHARGING PRESSURE CHECK [939010215]; 1064BB CHECK ON OPERATION OF SUPERCHARGING PRESSURE SOLENOID VALVE (PIERBURG) [939010216]; 1064BC VARIABLE GEOMETRY TURBOCHARGER ACTUATOR SEAL TEST [939010217]; 1064BD SUPERCHARGING TEMPERATURE CHECK [939010218]; 1064BE CHECK TURBO VALVE PROTECTION FUSE [939010219]

## 1064BA SUPRECHARGING PRESSURE CHECK  [939010215]
- Path: Test > 10 ENGINE > 1064 ENGINE SUPERCHARGING SYSTEM > 1064B CONTROL/SAFETY DEVICES > 1064BA SUPRECHARGING PRESSURE CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010215

Install fitting 1.870.752.000 between the turbocharging sensor and the intake chamber.
Connect the pressure transducer to the tool.
Position the diagnostic equipment in the passenger compartment and make the connections.
Select "pressure gauge" on the diagnostic equipment and prepare for the acquisition of data in "intake pressure" mode with a 2000 mmHg full scale deflection and select a time of 10 seconds.
Road test the vehicle (observing the speed limits in force) and perform the following test:
- On a motorway route, allow the vehicle to reach 2500 rpm in 4th gear.
- Initiate graphic acquistion by pressing start on the diagnostic equipment and 2 seconds later fully depress the accelerator pedal until the engine speed is 3500 rpm.
- Once this speed is reached completely release the accelerator pedal.
- Display the resulting graph and in the pressure constant section, with the exception of the initial peak, the reading should be 1900 -2080 mbar (1444 -1581 mmHg) corresponding to a supercharging value of 900 -1080 mbar.
- On a motorway route with fast-moving traffic, let the vehicle reach 2500 rpm in 3rd gear.
- Initiate graphic acquistion by pressing start on the diagnostic equipment and 2 seconds later fully depress the accelerator pedal until the engine speed is 3500 rpm.
- Once this speed is reached completely release the accelerator pedal.
- Display the resulting graph and in the pressure constant section, with the exception of the initial peak, the reading should be 1900 -2080 mbar (1444 -1581 mmHg) corresponding to a supercharging value of 900 -1080 mbar.

## 1064BB CHECK ON OPERATION OF SUPERCHARGING PRESSURE SOLENOID VALVE (PIERBURG)  [939010216]
- Path: Test > 10 ENGINE > 1064 ENGINE SUPERCHARGING SYSTEM > 1064B CONTROL/SAFETY DEVICES > 1064BB CHECK ON OPERATION OF SUPERCHARGING PRESSURE SOLENOID VALVE (PIERBURG)
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010216

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Press the START/STOP button and turn off the engine. Disconnect the wiring harness connector from the turbine variable geometry solenoid. See L036 TURBINE VARIABLE GEOMETRY CONTROL SOLENOID VALVE [→939004288] Press the START/STOP button. Measure the voltage between Pin 1 of the solenoid wiring side connector and Earth. Ensure it is greater than 11V. See L036 TURBINE VARIABLE GEOMETRY CONTROL SOLENOID VALVE [→939004288] Press the START/STOP button. Move on to Step 4 | Move on to Step 2 |
| 2 | In the engine compartment junction unit, remove fuse F11 (third from the right in the lower row) See B001 JUNCTION UNIT [→939003748] Press the START/STOP button. Check the voltage between the fuse inlet contact and earth. Ensure it is greater than 11 V. | Replace the junction unit Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] |
| 3 | If fualts are present, repair or if necessary replace the electrical wiring between the engine compartment junction unit and the solenoid. See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] The test can be considered over | Replace the junction unit Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] |
| 4 | Disconnect the wiring harness connector from engine control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] Press the START/STOP button. Measure the voltage between Pin 2 of the solenoid wiring side connector and Earth. Ensure it is less than 0.3 V. See L036 TURBINE VARIABLE GEOMETRY CONTROL SOLENOID VALVE [→939004288] | Repair or if necessary replace the electrical wiring between the engine control unit and the solenoid See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 5 | Press the START/STOP button. Measure the voltage between Pin 2 of the solenoid wiring side connector and Earth. Ensure it is greater than 500 kOhm. See L036 TURBINE VARIABLE GEOMETRY CONTROL SOLENOID VALVE [→939004288] | Repair or if necessary replace the electrical wiring between the engine control unit and the solenoid See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 6 | Measure the resistance between Pin 1 of the solenoid wiring side connector and Pin 7 of engine control unit wiring side connector. Ensure it is less than 5 Ohms. See L036 TURBINE VARIABLE GEOMETRY CONTROL SOLENOID VALVE [→939004288] See M010 ENGINE MANAGEMENT ECU [→939004314] | Repair or if necessary replace the electrical wiring between the engine control unit and the solenoid See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 7 | Reconnect the wiring harness connector to the engine control unit See M010 ENGINE MANAGEMENT ECU [→939004314] Connect a test bulb between pins 1 and 2 of the solenoid See L036 TURBINE VARIABLE GEOMETRY CONTROL SOLENOID VALVE [→939004288] Press the START/STOP button. Carry out the following active diagnosis: Turbo regulator, check that the bulb comes on. Move on to Step 9 | Move on to Step 8 |
| 8 | Reconnect the wiring harness connector to the solenoid See L036 TURBINE VARIABLE GEOMETRY CONTROL SOLENOID VALVE [→939004288] Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] The test can be considered over |  |
| 9 | Replace the solenoid valve Op. 1064B42 SOLENOID CONTROLLING TURBOCHARGER VANE POSITION ACTUATOR - R.R [→939010582] |  |

Visually inspect that during start-up, the turbocharger actuator connecting rod (turbine stator vanes adjustment device) moves by around 10 mm in the direction of the actuator.
With the engine switched off, connect connector EX09 and transducer EX06 in the section of pipe between the actuator and the solenoid valve.
Select intake pressure measuring gauge in instrument mode.
Start up the engine and let it idle, then wait until pressure pressure stabilizes.
The reading should not exceed 450-550 mmHg.
The graphic acquisition of the pressure trend can be carried out by selecting either the 2000 or 4000 mmHg scale.

## 1064BC VARIABLE GEOMETRY TURBOCHARGER ACTUATOR SEAL TEST  [939010217]
- Path: Test > 10 ENGINE > 1064 ENGINE SUPERCHARGING SYSTEM > 1064B CONTROL/SAFETY DEVICES > 1064BC VARIABLE GEOMETRY TURBOCHARGER ACTUATOR SEAL TEST
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010217

Visually inspect that during start-up, the turbocharger actuator connecting rod (turbine stator vanes adjustment device) moves by around 10 mm in the direction of the actuator.
With the engine switched off, connect connector EX09 and transducer EX06 in the section of pipe between the actuator and the solenoid valve.
Select intake pressure measuring gauge in instrument mode.
Start up the engine and let it idle, then wait until pressure pressure stabilizes.
The reading should not exceed 450-550 mmHg.
The graphic acquisition of the pressure trend can be carried out by selecting either the 2000 or 4000 mmHg scale.

## 1064BD SUPERCHARGING TEMPERATURE CHECK  [939010218]
- Path: Test > 10 ENGINE > 1064 ENGINE SUPERCHARGING SYSTEM > 1064B CONTROL/SAFETY DEVICES > 1064BD SUPERCHARGING TEMPERATURE CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010218

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | With the engine warm and idling, with all electrical users off and the accelerator pedal not operated, the air temperature in the intake manifold must be in a range between 10 and 120 °C. The test can be considered over | Move on to Step 2 |
| 2 | Turn the ignition key OFF. Disconnect the wiring harness connector from the fuel pressure regulator on the rail. See N087 FUEL PRESSURE REGULATOR ON RAIL [→939004482] Turn the ignition key ON. Measure the voltage between Pins 2 and 1 of the regulator to ensure they are not in the range between 4.8 and 5.2 V See N087 FUEL PRESSURE REGULATOR ON RAIL [→939004482] | Move on to Step 4 |
| 3 | If faults are present, repair or if necessary replace the electrical wiring between the engine control unit and the tubocharging sensor. See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] The test can be considered over | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |
| 4 | Measure the voltage between Pin 2 of the regulator and Earth to ensure it is in the range between 4.8 and 5.2 V See N087 FUEL PRESSURE REGULATOR ON RAIL [→939004482] | Move on to Step 3 |
| 5 | Check that the air temperature parameter in the AD/C intake manifold is within the range between 4.8 and 5.2 V | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |
| 6 | Connect an upstream connection lead with a fuse between Pin 2 of the regulator and Earth. Check that the air temperature in the AD/C intake manifold is now less than 0.3 V See N087 FUEL PRESSURE REGULATOR ON RAIL [→939004482] | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |
| 7 | Replace the turbo sensor Op. 1060G16 PRESSURE RELIEF SENSOR - R.R. [→939010565] |  |

## 1064BE CHECK TURBO VALVE PROTECTION FUSE  [939010219]
- Path: Test > 10 ENGINE > 1064 ENGINE SUPERCHARGING SYSTEM > 1064B CONTROL/SAFETY DEVICES > 1064BE CHECK TURBO VALVE PROTECTION FUSE
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010219

| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Press the START/STOP button and turn off the engine. Reconnect any disconnected components Turn off all the electrical users. Press the START/STOP button. In the under-dashboard junction unit base insert a new fuse F35 (second from the right in the upper row) and check it cuts in. Move on to Step 3 | A temporary current overload has occurred in the system behind fuse F35. move on to Step 2 |
| 2 | If faults are present, restore the correct operation of the under-dashboard control unit wiring. Replace it if necessary. The test can be considered over | Replace the junction unit **Op. 5505A18** |
| 3 | Press the START/STOP button. Disconnect the wiring harness connector from the brake pedal switch. Press the START/STOP button. Check that fuse F35 does not cut in | Move on to Step 6 |
| 4 | Connect a shunt cable with a fuse between sensor Pin 4 of the switch See I030 BRAKE PEDAL SWITCH [→939004116] and the battery positive See A001 BATTERY [→939004879] Check the brake lights do not come on | Replace the brake pedal switch Op. 5550D10 BRAKE LIGHT SWITCH - R+R [→939011051] |
| 5 | If faults are present, restore the correct operation of the wiring between the engine control unit and the brake pedal switch See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] Replace if necessary. The test is complete | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |
| 6 | Press the START/STOP button. Disconnect the wiring harness connector from the air flow meter. Press the START/STOP button. Check that fuse F35 cuts in | Replace the debimeter Op. 1060G10 AIR FLOW METER - R.R. [→939010563] |
| 7 | Press the START/STOP button. Disconnect the wiring harness connector from the accelerator pedal potentiometer Press the START/STOP button. Check that fuse F35 cuts in | Replace the accelerator pedal Op. 1068A20 ACCELERATOR PEDAL WITH BUILT-IN POTENTIOMETER - R.R [→939010585] |
| 8 | Press the START/STOP button. Disconnect the wiring harness connector from the temperature sensor and heater coil Press the START/STOP button. Check that fuse F35 cuts in | Replace the fuel heater **Op. 1044D10** |
| 9 | Check and restore the correct electrical connections between the engine compartment junction unit and components tested See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] Replace the wiring if necessary | Replace the junction unit Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] |

## 1068 ACCELERATOR CONTROLS  [939010220]
- Path: Test > 10 ENGINE > 1068 ACCELERATOR CONTROLS
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010220
- Subtopics: 1068A ACCELERATOR PEDAL CONTROL [939010221]

## 1068A ACCELERATOR PEDAL CONTROL  [939010221]
- Path: Test > 10 ENGINE > 1068 ACCELERATOR CONTROLS > 1068A ACCELERATOR PEDAL CONTROL
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010221
- Subtopics: 1068AC ACCELERATOR PEDAL CHECKS [939010222]

## 1068AC ACCELERATOR PEDAL CHECKS  [939010222]
- Path: Test > 10 ENGINE > 1068 ACCELERATOR CONTROLS > 1068A ACCELERATOR PEDAL CONTROL > 1068AC ACCELERATOR PEDAL CHECKS
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010222

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Press the START/STOP button and turn off the engine. With the engine off, all users off and the accelerator pedal not operated, the accelerator pedal value should be 0%. Under the same conditions, the value of accelerator pedal position 1 AD/C should be less than 1 V and accelerator pedal position 2 AD/C less than 0.5 V | Move on to Step 4 |
| 2 | With the accelerator pedal slightly operated, the value of accelerator pedal postion 1 AD/C must be greater than 1 V and accelerator pedal position 2 AD/C greater than 0.5 V | Move on to Step 4 |
| 3 | With the accelerator pedal pushed down to the floor, accelerator pedal value must be greater than 90%. Under the same conditions, the value of accelerator pedal position 1 AD/C should be greater than 3 V and accelerator pedal position 2 AD/C greater than 1.5 V The test can be considered over | Move on to Step 4 |
| 4 | Press the START/STOP button and turn off the engine. Disconnect the wiring harness connector from the accelerator pedal potentiometer See K055 ACCELERATOR PEDAL POTENTIOMETER [→939004212] Press the START/STOP button. Measure the voltage between Pin 2 of the solenoid wiring side connector and Earth. Ensure it is greater than 4.8 kOhm. See K055 ACCELERATOR PEDAL POTENTIOMETER [→939004212] Move on to Step 6 | Move on to Step 5 |
| 5 | If faults are present, repair or if necessary replace the electrical wiring between the engine control unit and the accelerator pedal potentiometer. See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] The test can be considered over | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |
| 6 | Measure the voltage between Pins 2 and 4 of the potentiometer to ensure they are in the range between 4.8 and 5.2 V See K055 ACCELERATOR PEDAL POTENTIOMETER [→939004212] | Move on to Step 5 |
| 7 | Press the START/STOP button. Connect a cable upstream with a fuse between pins 4 and 3 of the potentiometer See K055 ACCELERATOR PEDAL POTENTIOMETER [→939004212] Press the START/STOP button. Check that accelerator pedal position 1 AD/C is less than 0.3 V | Move on to Step 5 |
| 8 | Press the START/STOP button. Disconnect the cable upstream and reconnect between pins 2 and 3 of the potentiometer See K055 ACCELERATOR PEDAL POTENTIOMETER [→939004212] Press the START/STOP button. Check that accelerator pedal position 1 AD/C is greater than 4.8 V | Move on to Step 5 |
| 9 | Measure the voltage between Pin 1 of the potentiometer and Earth. Ensure it is greater than 4.8 V. See K055 ACCELERATOR PEDAL POTENTIOMETER [→939004212] | Move on to Step 5 |
| 10 | Measure the voltage between Pins 1 and 5 of the potentiometer to ensure they are in the range between 4.8 and 5.2 V See K055 ACCELERATOR PEDAL POTENTIOMETER [→939004212] | Move on to Step 5 |
| 11 | Press the START/STOP button. Connect the cable upstream as a shunt between pins 5 and 6 of the potentiometer See K055 ACCELERATOR PEDAL POTENTIOMETER [→939004212] Press the START/STOP button. Check that accelerator pedal position 2 AD/C is less than 0.3 V | Move on to Step 5 |
| 12 | Press the START/STOP button. Disconnect the cable upstream and reconnect between pins 1 and 6 of the potentiometer See K055 ACCELERATOR PEDAL POTENTIOMETER [→939004212] Press the START/STOP button. Check that accelerator pedal position 2 AD/C is greater than 4.8 V | Move on to Step 5 |
| 13 | Replace the accelerator pedal Op. 1068A20 ACCELERATOR PEDAL WITH BUILT-IN POTENTIOMETER - R.R [→939010585] |  |

## 1080 EMISSION CONTROL SYSTEM  [939010223]
- Path: Test > 10 ENGINE > 1080 EMISSION CONTROL SYSTEM
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010223
- Subtopics: 1080B EXHAUST EMISSION CONTROL SYSTEM [939010224]; 1080C EXHAUST GAS RECIRCULATION SYSTEM (E.G.R.) [939010229]

## 1080B EXHAUST EMISSION CONTROL SYSTEM  [939010224]
- Path: Test > 10 ENGINE > 1080 EMISSION CONTROL SYSTEM > 1080B EXHAUST EMISSION CONTROL SYSTEM
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010224
- Subtopics: 1080BE PARTICULATE FILTER SATURATION CHECK [939010225]; 1080BF CHECK DIFFERENTIAL PRESSURE SENSOR OPERATION [939010226]; 1080BG PRECONVERTER OUTPUT TEMPERATURE SENSOR OPERATION CHECK [939010227]; 1080BH DPF INPUT TEMPERATURE SENSOR OPERATION CHECK [939010228]; 1080BA UPSTREAM LAMBDA SENSOR OPERATION CHECK [939005363]; 1080BD DOWNSTREAM LAMBDA SENSOR OPERATION CHECK [939005364]

## 1080BE PARTICULATE FILTER SATURATION CHECK  [939010225]
- Path: Test > 10 ENGINE > 1080 EMISSION CONTROL SYSTEM > 1080B EXHAUST EMISSION CONTROL SYSTEM > 1080BE PARTICULATE FILTER SATURATION CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010225

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Turn the ignition ON with the engine off. Turn off all the electrical users. Display the dust saturation percentage parameter and ensure it is greater than 110%. |  |
| 2 | In the active diagnosis section, run diesel particulate filter Regeneration and ensure it is successful | Move on to Step 4 |
| 3 | Check the fault disappears. The test can be considered over | Move on to Step 4 |
| 4 | Check there are no leaks or obstructions in the exhaust circuit, including the hoses | Repair or if necessary replace the faulty components Op. 1080B EXHAUST EMISSION CONTROL SYSTEM [→939010618] |
| 5 | Check the precatalytic converter is not faulty | Replace the precatalytic converter **Op. 1080B40 CATALYTIC PRE-CONVERTER - R.R** |
| 6 | Check the main catalytic converter is not faulty | Replace the catalytic converter with particulate trap |
| 7 | Check that the exhaust gas temperature sensor on the precatalytic converter is correctly connected See E5060 CRUISE CONTROL [→939003153] | Restore the correct connections |
| 8 | Check that the exhaust gas temperature sensor on the precatalytic converter does not contain visually detectable faults. | Replace the temperature sensor on the precatalytic converter Op. 1080B64 CATALYTIC CONVERTER EXCESS TEMPERATURE THERMOCOUPLE - R + R [→939010622] |
| 9 | Check that the exhaust gas temperature sensor on the main catalytic converter is correctly connected See E5060 CRUISE CONTROL [→939003153] | Restore the correct connections |
| 10 | Check that the exhaust gas temperature sensor on the main catalytic converter does not contain visually detectable faults. | Replace the temperature sensor on the precatalytic converter |
| 11 | Check that the differential pressure sensor on the main catalytic converter is correctly connected See E5060 CRUISE CONTROL [→939003153] | Restore the correct connections |
| 12 | Check that the differential pressure sensor on the main catalytic converter does not contain visually detectable faults. | Replace pressure sensor |
| 13 | Replace the catalytic converter with particulate trap |  |

## 1080BF CHECK DIFFERENTIAL PRESSURE SENSOR OPERATION  [939010226]
- Path: Test > 10 ENGINE > 1080 EMISSION CONTROL SYSTEM > 1080B EXHAUST EMISSION CONTROL SYSTEM > 1080BF CHECK DIFFERENTIAL PRESSURE SENSOR OPERATION
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010226

| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Check whether error P2455 - Differential pressure sensor - is present using the diagnostic equipment | Replace differential pressure sensor Op. 1080B82 PARTICULATE FILTER DIFFERENTIAL PRESSURE (D.P.F.) SENSOR - R R [→939010626] |
| 2 | Press the START/STOP button and turn off the engine. Disconnect the wiring harness connector from the FAP differential pressure sensor. Press the START/STOP button. Check that the voltage across pin 1 and 2 of the sensor See K187 FAP DIFFERENTIAL PRESSURE SENSOR [→939004264] is greater than 4.8 V. Move on to Step 4 | Move on to Step 3 |
| 3 | If faults are found, restore the wiring between the engine control unit and the downstream temperature sensor See E5070 PARTICLE FILTER SYSTEM [→939011783] Replace the wiring if necessary The test can be considered over | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |
| 4 | On the diagnostic tester, check whether the differential pressure sensor voltage parameter is between 4.8 and 5.2 V | Move on to Step 3 |
| 5 | Connect a shunt cable with a fuse between sensor Pin 3 See K187 FAP DIFFERENTIAL PRESSURE SENSOR [→939004264] and the earth. On the diagnostic tester, check whether the differential pressure sensor voltage parameter is less than 0.3 V | Move on to Step 3 |
| 6 | Replace differential pressure sensor Op. 1080B82 PARTICULATE FILTER DIFFERENTIAL PRESSURE (D.P.F.) SENSOR - R R [→939010626] |  |

## 1080BG PRECONVERTER OUTPUT TEMPERATURE SENSOR OPERATION CHECK  [939010227]
- Path: Test > 10 ENGINE > 1080 EMISSION CONTROL SYSTEM > 1080B EXHAUST EMISSION CONTROL SYSTEM > 1080BG PRECONVERTER OUTPUT TEMPERATURE SENSOR OPERATION CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010227

| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Check whether error P2080 - Temperature sensor on preconverter output - is present using the diagnostic equipment | Replace the temperature sensor Op. 1080B64 CATALYTIC CONVERTER EXCESS TEMPERATURE THERMOCOUPLE - R + R [→939010622] |
| 2 | Press the START/STOP button and turn off the engine. Disconnect the wiring harness connector from the upstream particulate filter temperature (DPF) Press the START/STOP button. Check that the voltage across pin 1 and 2 of the sensor See K189 UPSTREAM PARTICULATE FILTER TEMPERATURE SENSOR (DPF) [→939004268] is greater than 4.8 V. Move on to Step 4 | Move on to Step 3 |
| 3 | If faults are found, restore the wiring between the engine control unit and the downstream temperature sensor See E5070 PARTICLE FILTER SYSTEM [→939011783] Replace the wiring if necessary The test can be considered over | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |
| 4 | Press the START/STOP button. Check that the resistance across pin 1 and 2 of the sensor See K189 UPSTREAM PARTICULATE FILTER TEMPERATURE SENSOR (DPF) [→939004268] is between 200 and 600 Ohms | Replace the temperature sensor Op. 1080B64 CATALYTIC CONVERTER EXCESS TEMPERATURE THERMOCOUPLE - R + R [→939010622] |
| 5 | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |  |

## 1080BH DPF INPUT TEMPERATURE SENSOR OPERATION CHECK  [939010228]
- Path: Test > 10 ENGINE > 1080 EMISSION CONTROL SYSTEM > 1080B EXHAUST EMISSION CONTROL SYSTEM > 1080BH DPF INPUT TEMPERATURE SENSOR OPERATION CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010228

| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Check whether error P2084 - Temperature sensor on particulate filter input - is present using the diagnostic equipment | Replace the temperature sensor Op. 1080B83 EXHAUST GAS TEMPERATURE SENSOR ON PARTICULATE FILTER (D.P.F.) - R R [→939010627] |
| 2 | Press the START/STOP button and turn off the engine. Disconnect the wiring harness connector from the temperature sensor downstream of the catalytic converter Press the START/STOP button. Check that the voltage across pin 1 and 2 of the sensor See K188 CAT. DOWNSTREAM TEMPERATURE SENSOR [→939004266] is greater than 4.8 V. Move on to Step 4 | Move on to Step 3 |
| 3 | If faults are found, restore the wiring between the engine control unit and the downstream temperature sensor See E5070 PARTICLE FILTER SYSTEM [→939011783] Replace the wiring if necessary The test can be considered over | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |
| 4 | Press the START/STOP button. Check that the resistance across pin 1 and 2 of the sensor See K188 CAT. DOWNSTREAM TEMPERATURE SENSOR [→939004266] is between 200 and 600 Ohms | Replace the temperature sensor Op. 1080B83 EXHAUST GAS TEMPERATURE SENSOR ON PARTICULATE FILTER (D.P.F.) - R R [→939010627] |
| 5 | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |  |

## 1080BA UPSTREAM LAMBDA SENSOR OPERATION CHECK  [939005363]
- Path: Test > 10 ENGINE > 1080 EMISSION CONTROL SYSTEM > 1080B EXHAUST EMISSION CONTROL SYSTEM > 1080BA UPSTREAM LAMBDA SENSOR OPERATION CHECK
- Kind: test / check procedure
- Applies to: engines: 1.8, 1.9 JTS, 2.2 JTS, 3.2 JTS; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005363

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Select the following parameters on the diagnostic equipment: - voltage of Lambda sensor upstream of the catalytic converter - voltage of Lambda sensor upstream of the catalytic converter 2 - Lambda control factor - Lambda 2 control factor |  |
| 2 | With the engine started, press the accelerator pedal several times, more or less rapidly, and check that the values of the parameters selected vary as a result at a corresponding speed. The test can be considered over | Move on to Step 3 |
| 3 | If there is no variation in one or both the Lambda sensors when the accelerator pedal is pressed, check that there are no errors linked to the Lambda sensors in the control unit | Continue as described by the diagnostic equipment |
| 4 | If there is a slow response by one or both of the Lambda sensors to the accelerator pedal being pressed, remove the faulty sensors and check that there are no signs of fouling. The test can be considered over | Move on to Step 5 |
| 5 | Clean the faulty sensor again with a dry cloth. Do not use petrol, water or special products to clean the sensor because they could damage it. If the sensor was fouled by fuel, move on to Step | If the sensor was fouled by oil, move on to Step 8 |
| 6 | Check that the errors memory does not indicate that there was misfire previously | Continue as described by the diagnostic equipment |
| 7 | Check that there are no fuel leaks from the injectors, by carrying out the See Test 1056BA INJECTOR OPERATION CHECK [→939005360 1056BA INJECTOR OPERATION CHECK] | The test can be considered over |
| 8 | Check that there are no engine oil leaks, as instructed in the See table X12 ENGINE OIL LEAKS [→939005423 X12 ENGINE OIL LEAKS] |  |

## 1080BD DOWNSTREAM LAMBDA SENSOR OPERATION CHECK  [939005364]
- Path: Test > 10 ENGINE > 1080 EMISSION CONTROL SYSTEM > 1080B EXHAUST EMISSION CONTROL SYSTEM > 1080BD DOWNSTREAM LAMBDA SENSOR OPERATION CHECK
- Kind: test / check procedure
- Applies to: engines: 1.8, 1.9 JTS, 2.2 JTS, 3.2 JTS; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005364

Disconnect the negative battery terminal
Disconnect the electrical connection for the two downstream Lambda sensors
See K017 LAMBDA SENSOR ON CATALYZER [→939004157]
See K018 LAMBDA SENSOR ON CATALYZER - 2 [→939004160]
Check that the heater resistance between Pins 3 and 4 is between 3.5 and 4.5 Ohm

## 1080C EXHAUST GAS RECIRCULATION SYSTEM (E.G.R.)  [939010229]
- Path: Test > 10 ENGINE > 1080 EMISSION CONTROL SYSTEM > 1080C EXHAUST GAS RECIRCULATION SYSTEM (E.G.R.)
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010229
- Subtopics: 1080CB E.G.R. SOLENOID FUNCTIONAL TEST [939010230]

## 1080CB E.G.R. SOLENOID FUNCTIONAL TEST  [939010230]
- Path: Test > 10 ENGINE > 1080 EMISSION CONTROL SYSTEM > 1080C EXHAUST GAS RECIRCULATION SYSTEM (E.G.R.) > 1080CB E.G.R. SOLENOID FUNCTIONAL TEST
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010230

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Press the START/STOP button and turn off the engine. Disconnect the wiring harness connector from the EGR solenoid See L030 EGR SOLENOID VALVE [→939004286] Press the START/STOP button. Measure the voltage between Pin 1 of the wiring side connector and Earth. Ensure it is greater than 11V. Press the START/STOP button. Move on to Step 4 | Move on to Step 2 |
| 2 | In the engine compartment junction unit, remove fuse F11 (third in the lower row) See B001 JUNCTION UNIT [→939003748] Press the START/STOP button. Check the voltage between the fuse inlet contact and earth. Ensure it is greater than 11 V. | Replace the junction unit Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] |
| 3 | If fualts are present, repair or if necessary replace the electrical wiring between the engine compartment junction unit and the solenoid. See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] The test can be considered over | Replace the junction unit Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] |
| 4 | Disconnect the wiring harness connector from engine control unit connector B See M010 ENGINE MANAGEMENT ECU [→939004314] Press the START/STOP button. Measure the voltage between Pin 2 of the EGR solenoid wiring side connector and Earth. Ensure it is less than 0.3 V. See L030 EGR SOLENOID VALVE [→939004286] | Repair or if necessary replace the electrical wiring between the engine control unit and the solenoid See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 5 | Press the START/STOP button. Measure the resistance between Pin 2 of the EGR solenoid wiring side connector and Earth. Ensure it is greater than 500 kOhm. See L030 EGR SOLENOID VALVE [→939004286] | Repair or if necessary replace the electrical wiring between the engine control unit and the solenoid See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 6 | Measure the resistance between Pin 2 of the EGR solenoid wiring side connector and Pin 60 of engine control unit wiring side connector B. Ensure it is less than 5 Ohms. See L030 EGR SOLENOID VALVE [→939004286] See M010 ENGINE MANAGEMENT ECU [→939004314] Reconnect the wiring harness connectors to the EGR solenoid and the engine control unit See L030 EGR SOLENOID VALVE [→939004286] See M010 ENGINE MANAGEMENT ECU [→939004314] | Repair or if necessary replace the electrical wiring between the engine control unit and the solenoid See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 7 | Replace the solenoid and check that the fault has disappeared Op. 1080C24 E.G.R. SYSTEM SOLENOID - R + R [→939010635] | Repair the original EGR solenoid and replace the engine control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |

## 33 BRAKES  [939010231]
- Path: Test > 33 BRAKES
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010231
- Subtopics: 3330 HYDRAULIC BRAKE SYSTEM [939010232]; 3340 ANTI-LOCK BRAKING SYSTEM (ABS) [939010237]

## 3330 HYDRAULIC BRAKE SYSTEM  [939010232]
- Path: Test > 33 BRAKES > 3330 HYDRAULIC BRAKE SYSTEM
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010232
- Subtopics: 3330A HYDRAULIC BRAKING SYSTEM TESTS AND CHECKS [939004859]; 3330D BRAKE VACUUM SYSTEM [939010235]

## 3330A HYDRAULIC BRAKING SYSTEM TESTS AND CHECKS  [939004859]
- Path: Test > 33 BRAKES > 3330 HYDRAULIC BRAKE SYSTEM > 3330A HYDRAULIC BRAKING SYSTEM TESTS AND CHECKS
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939004859
- Subtopics: 3330AA Checking the low brake fluid sensor sensor [939004860]

## 3330AA Checking the low brake fluid sensor sensor  [939004860]
- Path: Test > 33 BRAKES > 3330 HYDRAULIC BRAKE SYSTEM > 3330A HYDRAULIC BRAKING SYSTEM TESTS AND CHECKS > 3330AA Checking the low brake fluid sensor sensor
- Kind: test / check procedure
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939004860

- Disconnect the sensor connection.
- Connect the Examiner in Ohmmeter mode to the sensor terminals
- Check that the contact is open when the oil level is low and closed when the level is correct

## 3330D BRAKE VACUUM SYSTEM  [939010235]
- Path: Test > 33 BRAKES > 3330 HYDRAULIC BRAKE SYSTEM > 3330D BRAKE VACUUM SYSTEM
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010235
- Subtopics: 3330DA CHECK VACUUM PUMP OPERATION AND BRAKE SERVO VACUUM CIRCUIT [939010236]

## 3330DA CHECK VACUUM PUMP OPERATION AND BRAKE SERVO VACUUM CIRCUIT  [939010236]
- Path: Test > 33 BRAKES > 3330 HYDRAULIC BRAKE SYSTEM > 3330D BRAKE VACUUM SYSTEM > 3330DA CHECK VACUUM PUMP OPERATION AND BRAKE SERVO VACUUM CIRCUIT
- Kind: test / check procedure
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010236

Discharge the vacuum in the brake servo, with the engine switched off, by repeatedly pressing and releasing the brake pedal forcefully
Start up the engine without accelerating with the pedal depressed.
After a few seconds, check that brake pedal is operating in accordance with the increase in pressure due to the action of the brake servo.
Release the brake pedal and swith off the engine without operating the pedal again.
After about 10 minutes with the engine switched off, operate the brake pedal and check that when it is operated for the first time the extent it is lowered corresponds to the brake servo and that the operation becomes gradually harder.

## 3340 ANTI-LOCK BRAKING SYSTEM (ABS)  [939010237]
- Path: Test > 33 BRAKES > 3340 ANTI-LOCK BRAKING SYSTEM (ABS)
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010237
- Subtopics: 3340A ABS CHECK/ADJUSTMENT DEVICES [939010238]

## 3340A ABS CHECK/ADJUSTMENT DEVICES  [939010238]
- Path: Test > 33 BRAKES > 3340 ANTI-LOCK BRAKING SYSTEM (ABS) > 3340A ABS CHECK/ADJUSTMENT DEVICES
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010238
- Subtopics: 3340AB SPEED SIGNAL CHECK [939010239]

## 3340AB SPEED SIGNAL CHECK  [939010239]
- Path: Test > 33 BRAKES > 3340 ANTI-LOCK BRAKING SYSTEM (ABS) > 3340A ABS CHECK/ADJUSTMENT DEVICES > 3340AB SPEED SIGNAL CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010239

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Carry out a road test and drive the car at a constant speed of 30 km/h. Check the reading on the diagnostic instrument for: · Left front wheel speed (ASX) · Right front wheel speed (ADX) · Left rear wheel speed (PSX) · Right rear wheel speed (PDX) and ensure they approximately coincide with the speed shown on the instrument panel. The test can be considered over | Move on to Step 2 |
| 2 | Continue the road test and check whether the Diesel EDC16C39 electronic injection control unit displays the error P055-vehicle speed signal. Move on to Step 6 | Move on to Step 3 |
| 3 | Continue driving at a constant speed of 30 km/h. Check the ABS TRW EBC 430NG control unit to see whether the diagnostic instrument reading for: · Left front wheel speed (ASX) · Right front wheel speed (ADX) · Left rear wheel speed (PSX) · Right rear wheel speed (PDX) is not within range between 15 and 45 km/h. Continue to step 5. | Replace the ABS control unit Op. 3340A12 ABS HYDRAULIC AND ELECTRONIC CONTROL UNIT - R.R. [→939010774] Move on to Step 4 |
| 4 | Check the fault disappears. The test can be considered over | Repair the original ABS control unit and replace the engine control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |
| 5 | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] The test can be considered over |  |
| 6 | Go back to the workshop and turn off the engine. Turn the ignition key to the ON position. With the engine off, lift the vehicle and turn the left front wheel slowly by hand. Check that the reading for the Left Front Wheel (ASX) speed in the ABS TRW EBC 430NG control unit is greater than 1 km/h. | Replace the ABS control unit Op. 3340A12 ABS HYDRAULIC AND ELECTRONIC CONTROL UNIT - R.R. [→939010774] Move on to Step 4 |
| 7 | Replace the instrument panel and check that the fault has disappeared Op. 5560B10 CONTROL PANEL - R+R [→939011063] | Repair the original instrument panel and replace the engine control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |

## 44 SUSPENSION AND WHEELS  [939010240]
- Path: Test > 44 SUSPENSION AND WHEELS
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010240
- Subtopics: 44A ROAD TEST FOR COMFORT EVALUATION [939010241]; 44B ROAD TEST FOR ROLLING/PITCHING EVALUATION [939010242]; 4410 FRONT SUSPENSION [939010243]; 4420 REAR SUSPENSION [939010251]

## 44A ROAD TEST FOR COMFORT EVALUATION  [939010241]
- Path: Test > 44 SUSPENSION AND WHEELS > 44A ROAD TEST FOR COMFORT EVALUATION
- Kind: test / check procedure
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010241

- Carry out a road test on traffic free roads in safe conditions following the highway code.
- Before proceeding with the test, check the inflation pressure of the two vehicles, restoring the values to the correct ones if they are found to be incorrect.
- Also check the conditions of the wheel rims making sure they are not distorted or broken, replacing them if any faults are found.
- Carry out the test on an uneven road surface, at a speed of 40 km/h to check the capacity of the suspension to absorb the stresses produced by small imperfections (suspension damping) with the consesquent acoustic repercussions inside the passenger compartment.
- Check the capacity of the suspension to absorb the stresses produced by large imperfections and the consequent acoustic repercussions inside the passenger compartment, carry out the road test at a speed of 40 km/h over a route that has a series of pot-holes.
- Check the rapid damping of any pitching produced by the irregularities in the road surface, carrying out the test at a speed of 50 km/h on a straight road with suitably spaced humps and holes.
- At the end of the test in question, assess/rate the driving comfort of the vehicle in accordance with the enclosed table.
| Judgement | Vote |
| --- | --- |
| Poor | 3 |
| Mediocre | 4 |
| Just acceptable | 5,5 |
| Acceptable | 6 |
| Good | 7 |
> Note: The reference vehicle has a driving comfort default rating of 7.

## 44B ROAD TEST FOR ROLLING/PITCHING EVALUATION  [939010242]
- Path: Test > 44 SUSPENSION AND WHEELS > 44B ROAD TEST FOR ROLLING/PITCHING EVALUATION
- Kind: test / check procedure
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010242

- Carry out a road test on traffic free roads in safe conditions following the highway code.
- Before proceeding with the test, check the inflation pressure of the two vehicles, restoring the values to the correct ones if they are found to be incorrect.
- Also check the conditions of the wheel rims making sure they are not distorted or broken, replacing them if any faults are found.
- Carry out the test on a route where there are left and right hand bends of different degrees, evaluating the laying down speed of the vehicle round the bends, trying to take the bends at a constant speed, avoiding carrying out pull/release manoeuvres.
- Evaluate the stability of the vehicle by simulating a lane change/overtaking and check that violent vehicle reactions do not appear leading to unsafe driving during this manoeuvre.
- Then carry out a road test on an unmade road (cobblestones) where there are right/left hand bends of different degrees to evaluate the tendency of the rear of the vehicle to lose grip.
- This type of test should always be used for comparison with a new vehicle or reference vehicle of the same trim level and engine type, available in the workshop at the time of the test in question.
- At the end of the test in question, assess/rate the behaviour of the vehicle in terms of rolling/pitching in accordance with the enclosed table.
| Judgement | Vote |
| --- | --- |
| Poor | 3 |
| Mediocre | 4 |
| Just acceptable | 5,5 |
| Acceptable | 6 |
| Good | 7 |
> Note: The reference vehicle has a rolling/pitching default rating of 7.

## 4410 FRONT SUSPENSION  [939010243]
- Path: Test > 44 SUSPENSION AND WHEELS > 4410 FRONT SUSPENSION
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010243
- Subtopics: 4410A FRONT DAMPERS AND SPRINGS [939010244]; 4410C ANTI-ROLL BAR AND ANCHORAGE STRUTS [939010247]; 4410O FRONT SUSPENSION TESTS [939010249]

## 4410A FRONT DAMPERS AND SPRINGS  [939010244]
- Path: Test > 44 SUSPENSION AND WHEELS > 4410 FRONT SUSPENSION > 4410A FRONT DAMPERS AND SPRINGS
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010244
- Subtopics: 4410AB CHECKING RUBBER BLOCK AND BEARING ON FRONT SHOCK ABSORBER [939010245]; 4410AF CHECK OF STATE OF SPRINGS ON LAYOUT BRACKETS [939010246]

## 4410AB CHECKING RUBBER BLOCK AND BEARING ON FRONT SHOCK ABSORBER  [939010245]
- Path: Test > 44 SUSPENSION AND WHEELS > 4410 FRONT SUSPENSION > 4410A FRONT DAMPERS AND SPRINGS > 4410AB CHECKING RUBBER BLOCK AND BEARING ON FRONT SHOCK ABSORBER
- Kind: test / check procedure
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010245

1. Check that the lower rubber mounting is present and correctly positioned.
[image: https://sloeber94.github.io/elrnDB/media/939003062.jpg]

## 4410AF CHECK OF STATE OF SPRINGS ON LAYOUT BRACKETS  [939010246]
- Path: Test > 44 SUSPENSION AND WHEELS > 4410 FRONT SUSPENSION > 4410A FRONT DAMPERS AND SPRINGS > 4410AF CHECK OF STATE OF SPRINGS ON LAYOUT BRACKETS
- Kind: test / check procedure
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010246

- Position the vehicle on a two column lift and raise it.
1. Check that there are no layout brackets without clips that flexible brake pipes pass through.
2. If the clips are present, check that they are in good condition and that the rubber mountings (2a) are not damaged and do not have torn edges.
[image: https://sloeber94.github.io/elrnDB/media/194003786.jpg]

## 4410C ANTI-ROLL BAR AND ANCHORAGE STRUTS  [939010247]
- Path: Test > 44 SUSPENSION AND WHEELS > 4410 FRONT SUSPENSION > 4410C ANTI-ROLL BAR AND ANCHORAGE STRUTS
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010247
- Subtopics: 4410CA CHECKS ON STABILIZER BAR [939010248]

## 4410CA CHECKS ON STABILIZER BAR  [939010248]
- Path: Test > 44 SUSPENSION AND WHEELS > 4410 FRONT SUSPENSION > 4410C ANTI-ROLL BAR AND ANCHORAGE STRUTS > 4410CA CHECKS ON STABILIZER BAR
- Kind: test / check procedure
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010248

Position the vehicle on a two column lift.
Raise the vehicle and check that the anti-roll bar is correctly positioned (transversely) in relation to the centre line.
- Check that there is no wear of the paint at the contact points between the bar and the chassis.
1-2. Using a torque wrench calibrated to the recommended value, check that the fastenings for the bar on the frame (1), the fastenings for the connecting rod to the shock absorber (2a) and to the bar are tightened to the torque indicated below.
|  | Type of fastening | Component | Torque (daNm) |
| --- | --- | --- | --- |
| 1 | Bolt M8X1.25 | Engine Chassis | 2,4 |
| 2a | Nut M12X1.75 | Shock absorber | 8 |
| 2b | Nut M12X1.75 | Anti-roll bar | 8 |
[image: https://sloeber94.github.io/elrnDB/media/194003787.jpg]

1. Visually inspect that the rear bolts fixing the anti-roll bar u-bolt have not loosened.
|  | Type of fastening | Component | Torque (daNm) + Angle (°) |
| --- | --- | --- | --- |
| 1 | Bolt M12X1.75 | Engine Chassis | 8 + 90° |
[image: https://sloeber94.github.io/elrnDB/media/194003788.jpg]

## 4410O FRONT SUSPENSION TESTS  [939010249]
- Path: Test > 44 SUSPENSION AND WHEELS > 4410 FRONT SUSPENSION > 4410O FRONT SUSPENSION TESTS
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010249
- Subtopics: 4410OA CHECKING CORRECT TIGHTENING OF FRONT SUSPENSION [939010250]

## 4410OA CHECKING CORRECT TIGHTENING OF FRONT SUSPENSION  [939010250]
- Path: Test > 44 SUSPENSION AND WHEELS > 4410 FRONT SUSPENSION > 4410O FRONT SUSPENSION TESTS > 4410OA CHECKING CORRECT TIGHTENING OF FRONT SUSPENSION
- Kind: test / check procedure
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010250

Position the vehicle on a two column lift.
> Note: If the area where the noise is coming from has been identified, firstly check the fastenings in that area, otherwise follow the order indicated.
1. Using a torque wrench calibrated to the recommended value, check that the fixing nuts fixing the shock absorber stem to the mounting (1a) and fixing the shock absorber mounting to the bodyshell (1b) are tightened to the torque given below.
|  | Type of fastening | Component | Torque (daNm) |
| --- | --- | --- | --- |
| 1a | Nut M10X1.75 | Shock absorber | 2,5 |
| 1b | Nut M10X1.75 | Bodyshell | 3,5 |
[image: https://sloeber94.github.io/elrnDB/media/194003789.jpg]

2. Raise the vehicle and check that the various front suspension fastenings are correctly tightened.
Using a torque wrench calibrated to the recommended value, check that the fastenings between the shock absorber and the lower fork (2) are tightened to the torque given below.
|  | Type of fastening | Component | Torque (daNm) |
| --- | --- | --- | --- |
| 2 | Bolt M12X1.75 | Lower Fork | 7 |
[image: https://sloeber94.github.io/elrnDB/media/194003790.jpg]

3. Using a torque wrench calibrated to the recommended value, check that the front nuts fixing the anti-roll bar u-bolt to the engine chassis (3a) are tightened to the torque given below.
|  | Type of fastening | Component | Torque (daNm) |
| --- | --- | --- | --- |
| 3a | Bolt M8X1.25 | Engine Chassis | 2,4 |
[image: https://sloeber94.github.io/elrnDB/media/194003791.jpg]

- Visually inspect that the rear bolts fixing the anti-roll bar u-bolt to the engine chassis (3b) have not loosened.
|  | Type of fastening | Component | Torque (daNm) + Angle (°) |
| --- | --- | --- | --- |
| 3b | Bolt M12X1.25 | Engine Chassis | 8 + 90° |
[image: https://sloeber94.github.io/elrnDB/media/194003792.jpg]

- Using a torque wrench calibrated to the recommended value, check that the fastening for the connecting rod upper end (3c) and the fastening for the connecting rod lower end (3d) are tightened to the torque indicated below.
|  | Type of fastening | Component | Torque (daNm) |
| --- | --- | --- | --- |
| 3c | Nut M12X1.75 | Shock absorber | 8 |
| 3d | Nut M12X1.75 | Anti-roll bar | 8 |
[image: https://sloeber94.github.io/elrnDB/media/194003793.jpg]

4. Visually inspect that the bolts fixing the track control arm front bush (4a), the track control arm rear bush (4b) and the 3rd fastening securing the track control arm rear bush (4c) have not loosened.
|  | Type of fastening | Component | Torque (daNm) + Angle (°) |
| --- | --- | --- | --- |
| 4a | Bolt M14X2 | Arm front bush | 17,5 + 45° |
| 4b | Bolt M12X1.75 | Arm rear bush | 8 + 90° |
| 4c | Bolt M12X1.75 | Rear bush 3rd fastening | 8 + 90° |
[image: https://sloeber94.github.io/elrnDB/media/194003794.jpg]

- Visually inspect that the bolts fixing the shock absorber fork to the track control arm (4d) have not loosened.
|  | Type of fastening | Component | Torque (daNm) + Angle (°) |
| --- | --- | --- | --- |
| 4d | Bolt M14X2 | Fork to lower track control arm | 5 + 45° |
[image: https://sloeber94.github.io/elrnDB/media/194003795.jpg]

- Using a torque wrench calibrated to the recommended value, check that the bolts fixing the track control arm to the steering knuckle (4e) are tightened to the torque given below.
|  | Type of fastening | Component | Torque (daNm) |
| --- | --- | --- | --- |
| 4e | Bolt M14X1.5 | Track control arm to steering knuckle | 9 |
[image: https://sloeber94.github.io/elrnDB/media/194003796.jpg]

5. Visually inspect that the bolts fixing the upper aluminium track control arm to the bodyshell (5a) have not loosened.
|  | Type of fastening | Component | Torque (daNm) + Angle (°) |
| --- | --- | --- | --- |
| 5a | Bolt M12X1.75 | Upper track control arm | 8 + 45° |
[image: https://sloeber94.github.io/elrnDB/media/194003797.jpg]

- Using a torque wrench calibrated to the recommended value, check that the fastening between the track control arm and the steering knuckle (5b) is tightened to the torque given below.
|  | Type of fastening | Component | Torque (daNm) |
| --- | --- | --- | --- |
| 5b | Bolt M10X1.25 | Steering knuckle | 4,5 |
[image: https://sloeber94.github.io/elrnDB/media/194003798.jpg]

6. Using a torque wrench calibrated to the recommended value, check that the fixing nut between the steering box rod and the front steering knuckle (6) is tightened to the torque given below.
|  | Type of fastening | Component | Torque (daNm) |
| --- | --- | --- | --- |
| 6 | Bolt M12X1.75 | Steering Box Rod | 11 |
[image: https://sloeber94.github.io/elrnDB/media/194003799.jpg]

7. Visually inspect that the bolts fixing the steering box to the engine chassis (7) have not loosened.
|  | Type of fastening | Component | Torque (daNm) + Angle (°) |
| --- | --- | --- | --- |
| 7 | Bolt M14X2 | Engine Chassis | 12,5 + 180° |
[image: https://sloeber94.github.io/elrnDB/media/194003800.jpg]

8. Visually inspect that the front bolts fixing the engine chassis and the bodyshell (8a), the centre bolts fixing the engine chassis and the bodyshell (8b) and the rear bolts fixing the engine chassis and the bodyshell (8c) have not loosened.
|  | Type of fastening | Component | Torque (daNm) + Angle (°) |
| --- | --- | --- | --- |
| 8a | Bolt M14X2 | Front engine chassis | 18 + 90° |
| 8b | Bolt M14X2 | Centre engine chassis | 13 + 90° |
| 8c | Bolt M14X2 | Rear engine chassis | 11 + 90° |
[image: https://sloeber94.github.io/elrnDB/media/194003801.jpg]

- Using a torque wrench calibrated to the recommended value, check that the bolts fixing the vertical bracket to the bodyshell (8d) and the bolts fixing the vertical bracket to the engine chassis (8e) are tightened to the torque given below.
|  | Type of fastening | Component | Torque (daNm) |
| --- | --- | --- | --- |
| 8d | Bolt M12X1.75 | Vertical brackets to bodyshell | 8 |
| 8e | Bolt M12X1.75 | Vertical brackets to engine chassis | 8 |
[image: https://sloeber94.github.io/elrnDB/media/194003802.jpg]

9. Using a torque wrench calibrated to the recommended value, check that the bolt fixing the brake caliper to the steering knuckle (9) is tightened to the torque given below.
|  | Type of fastening | Component | Torque (daNm) |
| --- | --- | --- | --- |
| 9 | Bolt M14X1.5 | Steering knuckle | 16 |
[image: https://sloeber94.github.io/elrnDB/media/194003803.jpg]

10. Using a torque wrench calibrated to the recommended value, check that the bolt fixing the brake disc heat shield to the steering knuckle (10) is tightened to the torque given below.
|  | Type of fastening | Component | Torque (daNm) |
| --- | --- | --- | --- |
| 10 | Bolt M16 | Steering knuckle | 0,5 |
[image: https://sloeber94.github.io/elrnDB/media/194003804.jpg]

11. Visually inspect that the bolts fixing the engine chassis and the engine side connecting rod (11a) and the engine chassis and the gearbox side connecting rod (11b) have not loosened.
|  | Type of fastening | Component | Torque (daNm) + Angle (°) |
| --- | --- | --- | --- |
| 11a | Bolt M12X1.75 | Engine Chassis | 7 + 60° |
| 11b | Bolt M12X1.75 | Engine Chassis | 7 + 60° |
[image: https://sloeber94.github.io/elrnDB/media/194003805.jpg]

## 4420 REAR SUSPENSION  [939010251]
- Path: Test > 44 SUSPENSION AND WHEELS > 4420 REAR SUSPENSION
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010251
- Subtopics: 4420A REAR DAMPERS AND SPRINGS [939010252]; 4420C REAR SUSPENSION STABILIZER BAR/LINKS [939010255]; 4420O REAR SUSPENSION TESTS [939010257]

## 4420A REAR DAMPERS AND SPRINGS  [939010252]
- Path: Test > 44 SUSPENSION AND WHEELS > 4420 REAR SUSPENSION > 4420A REAR DAMPERS AND SPRINGS
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010252
- Subtopics: 4420AF CHECK OF SPRING STATUS ON LAYOUT BRACKETS [939010253]; 4420AG CHECK OF DAMPER CORRECT ORIENTATION [939010254]

## 4420AF CHECK OF SPRING STATUS ON LAYOUT BRACKETS  [939010253]
- Path: Test > 44 SUSPENSION AND WHEELS > 4420 REAR SUSPENSION > 4420A REAR DAMPERS AND SPRINGS > 4420AF CHECK OF SPRING STATUS ON LAYOUT BRACKETS
- Kind: test / check procedure
- Applies to: engines: 1.8, 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010253

- Position the vehicle on a two column lift and raise it.
1. Check that there are no layout brackets without clips that flexible brake pipes pass through.
2. If the clips are present, check that they are in good condition and that the rubber mountings (2a) are not damaged and do not have torn edges.
[image: https://sloeber94.github.io/elrnDB/media/939003063.jpg]

## 4420AG CHECK OF DAMPER CORRECT ORIENTATION  [939010254]
- Path: Test > 44 SUSPENSION AND WHEELS > 4420 REAR SUSPENSION > 4420A REAR DAMPERS AND SPRINGS > 4420AG CHECK OF DAMPER CORRECT ORIENTATION
- Kind: test / check procedure
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010254

Remove the luggage compartment interior lining side panels.
- Carry out op.
Op. 7040B18 LOAD COMPARTMENT LOAD PLATFORM SIDE TRIM ONE LH OR RH - R.R [→939011249]
1. Check that the buffer plate is fitted in the correct position as illustrated in the diagram.
[image: https://sloeber94.github.io/elrnDB/media/939003064.jpg]

1. If the plate is not fitted in the correct position, refit it correctly as illustrated in the diagram.
[image: https://sloeber94.github.io/elrnDB/media/939003065.jpg]

## 4420C REAR SUSPENSION STABILIZER BAR/LINKS  [939010255]
- Path: Test > 44 SUSPENSION AND WHEELS > 4420 REAR SUSPENSION > 4420C REAR SUSPENSION STABILIZER BAR/LINKS
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010255
- Subtopics: 4420CA CHECKS ON REAR STABILIZER BAR [939010256]

## 4420CA CHECKS ON REAR STABILIZER BAR  [939010256]
- Path: Test > 44 SUSPENSION AND WHEELS > 4420 REAR SUSPENSION > 4420C REAR SUSPENSION STABILIZER BAR/LINKS > 4420CA CHECKS ON REAR STABILIZER BAR
- Kind: test / check procedure
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010256

- Position the vehicle on a two column lift.
- Check that the paint is not worn at the contact points between the bar and the crossmember.
1. Using a torque wrench calibrated to the recommended value, check that the fastenings between the bar and the crossmember (1a) and between the bar and the connecting rod (1b) and between the connecting rod and the longitudinal rod (1c) are tightened to the torque indicated below.
|  | Type of fastening | Component | Torque (daNm) |
| --- | --- | --- | --- |
| 1a | Nut M8X1.25 | Crossmember | 2,5 |
| 1b | Nut M12X1.75 | Shock absorber | 8 |
| 1c | Nut M12X1.75 | Longitudinal bar | 8 |
[image: https://sloeber94.github.io/elrnDB/media/194003809.jpg]

## 4420O REAR SUSPENSION TESTS  [939010257]
- Path: Test > 44 SUSPENSION AND WHEELS > 4420 REAR SUSPENSION > 4420O REAR SUSPENSION TESTS
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.8, 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010257
- Subtopics: 4420OB REAR SUSPENSION CORRECT TIGHTENING CHECK [939010258]

## 4420OB REAR SUSPENSION CORRECT TIGHTENING CHECK  [939010258]
- Path: Test > 44 SUSPENSION AND WHEELS > 4420 REAR SUSPENSION > 4420O REAR SUSPENSION TESTS > 4420OB REAR SUSPENSION CORRECT TIGHTENING CHECK
- Kind: test / check procedure
- Applies to: engines: 1.8, 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010258

- Position the vehicle on a two column lift.
> Note: If the area where the noise is coming from has been identified, firstly check the fastenings in that area, otherwise follow the order indicated.
- Remove the luggage compartment interior lining side panels.
Op. 7040B18 LOAD COMPARTMENT LOAD PLATFORM SIDE TRIM ONE LH OR RH - R.R [→939011249]
1. Using a torque wrench set to the recommended value, check that the shock absorber plate is tightened to the recommended torque (1).
|  | Type of fastening | Component | Torque (daNm) |
| --- | --- | --- | --- |
| 1 | Nut M10X1.75 | Shock absorber | 2,5 |
[image: https://sloeber94.github.io/elrnDB/media/194003810.jpg]

2. Raise the vehicle and check that the various rear suspension fastenings are correctly tightened.
Using a torque wrench set to the recommended value, check that the fastening securing the shock absorber bracket to the bodyshell is tightened to the recommended torque (2).
|  | Type of fastening | Component | Torque (daNm) |
| --- | --- | --- | --- |
| 2 | Bolt M10X1.5 | Bodyshell | 3 |
[image: https://sloeber94.github.io/elrnDB/media/194003811.jpg]

3. Using a torque wrench calibrated to the recommended value, check that the lower nut fixing the shock absorber to the longitudinal track control arm (3) is tightened to the torque given below.
|  | Type of fastening | Component | Torque (daNm) |
| --- | --- | --- | --- |
| 3 | Bolt M14X2 | Longitudinal bar | 13,5 |
[image: https://sloeber94.github.io/elrnDB/media/194003812.jpg]

4. Visually inspect that the bolts securing the camber rod to the crossmember (4a), the camber rod to the steering knuckle (4b) and the plate to the crossmember (4b) have not loosened.
|  | Type of fastening | Component | Torque (daNm) |
| --- | --- | --- | --- |
| 4a | Bolt M12X1.75 | Rod to crossmember | 6 + 90° |
| 4b | Bolt M12X1.75 | Rod to steering knuckle | 6 + 90° |
| 4c | Bolt M14X2 | Plate to crossmember | 11 + 90° |
[image: https://sloeber94.github.io/elrnDB/media/194003813.jpg]

- Using a torque wrench calibrated to the recommended value, check that the nut fixing the plate to the longitudinal arm (4d) is tightened to the torque given below.
|  | Type of fastening | Component | Torque (daNm) |
| --- | --- | --- | --- |
| 4d | Nut M12X1.75 | Plate to longitudinal arm | 7 |
[image: https://sloeber94.github.io/elrnDB/media/194003814.jpg]

5. Visually inspect that the bolts fixing the longitudinal arm bracket to the bodyshell (5a), the bracket to the longitudinal arm (5b) and the front fastening between the longitudinal arm and the steering knuckle (5c) have not loosened.
|  | Type of fastening | Component | Torque (daNm) + Angle (°) |
| --- | --- | --- | --- |
| 5a | Bolt M14X2 | Bodyshell | 15 + 45° |
| 5b | Bolt M14X2 | Bracket | 8 + 90° |
| 5c | Bolt M14X2 | Steering knuckle | 14 + 60° |
[image: https://sloeber94.github.io/elrnDB/media/194003815.jpg]

- Using a torque wrench calibrated to the recommended value, check that the rear fixing nut between the longitudinal arm and the steering knuckle (5d) is tightened to the torque given below.
|  | Type of fastening | Component | Torque (daNm) + Angle (°) |
| --- | --- | --- | --- |
| 5d | Bolt M14X2 | Steering knuckle | 8,5 + 45° |
[image: https://sloeber94.github.io/elrnDB/media/194003816.jpg]

6. Visually inspect that the rear bolts fixing the crossmember to the bodyshell (6) have not loosened.
|  | Type of fastening | Component | Torque (daNm) + Angle (°) |
| --- | --- | --- | --- |
| 6 | Bolt M12X1.75 | Crossmember | 12,5 + 45° |
[image: https://sloeber94.github.io/elrnDB/media/194003817.jpg]

7. Using a torque wrench calibrated to the recommended value, check that the bolts fixing the anti-roll bar to the crossmember (7) are tightened to the torque given below.
|  | Type of fastening | Component | Torque (daNm) |
| --- | --- | --- | --- |
| 7 | Bolt M8X1.25 | Crossmember | 2,5 |
[image: https://sloeber94.github.io/elrnDB/media/194003818.jpg]

8. Using a torque wrench calibrated to the recommended value, check that the bolts fixing the connecting rod to the bar (8a) and to the longitudinal track control arm (8b) are tightened to the torque given below.
|  | Type of fastening | Component | Torque (daNm) |
| --- | --- | --- | --- |
| 8a | Bolt M12X1.75 | Anti-roll bar | 8 |
| 8b | Bolt M12X1.75 | Longitudinal bar | 8 |
[image: https://sloeber94.github.io/elrnDB/media/194003819.jpg]

9. Using a torque wrench calibrated to the recommended value, check that the bolts fixing the brake caliper to the steering knuckle (9) are tightened to the torque given below.
|  | Type of fastening | Component | Torque (daNm) |
| --- | --- | --- | --- |
| 9 | Bolt M10X1.25 | Brake caliper | 5,7 |
[image: https://sloeber94.github.io/elrnDB/media/194003820.jpg]

10. Using a torque wrench calibrated to the recommended value, check that the bolts fixing the disc brake heat shield to the steering knuckle (10) are tightened to the torque given below.
|  | Type of fastening | Component | Torque (daNm) |
| --- | --- | --- | --- |
| 10 | Bolt M6x1 | Heat shield | 0,5 |
[image: https://sloeber94.github.io/elrnDB/media/194003821.jpg]

11. Using a torque wrench calibrated to the recommended value, check that the bolts fixing the steering knuckle to the hub (11) are tightened to the torque given below.
|  | Type of fastening | Component | Torque (daNm) |
| --- | --- | --- | --- |
| 11 | Bolt M12X1.5 | Steering knuckle | 6,6 |
[image: https://sloeber94.github.io/elrnDB/media/194003822.jpg]

## 50 AUXILIARY UNITS  [939010259]
- Path: Test > 50 AUXILIARY UNITS
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010259
- Subtopics: 5040 AIR CONDITIONING CASING AND COMPONENTS [939010260]

## 5040 AIR CONDITIONING CASING AND COMPONENTS  [939010260]
- Path: Test > 50 AUXILIARY UNITS > 5040 AIR CONDITIONING CASING AND COMPONENTS
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010260
- Subtopics: 5040A AIR CONDITIONING REFRIGERANT CIRCUIT [939010261]; 5040B SYSTEM SAFETY CONTROL DEVICES [939010263]; 5040C AIR CONDITIONING CASING AND COMPONENTS [939010266]; 5040D AIR CONDITIONING CONTROLS [939010268]; 5040O AIR CONDITIONING CASING AND COMPONENTS TESTS [939004800]

## 5040A AIR CONDITIONING REFRIGERANT CIRCUIT  [939010261]
- Path: Test > 50 AUXILIARY UNITS > 5040 AIR CONDITIONING CASING AND COMPONENTS > 5040A AIR CONDITIONING REFRIGERANT CIRCUIT
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010261
- Subtopics: 5040AB REFRIGERANT CIRCUIT CHECK [939010262]

## 5040AB REFRIGERANT CIRCUIT CHECK  [939010262]
- Path: Test > 50 AUXILIARY UNITS > 5040 AIR CONDITIONING CASING AND COMPONENTS > 5040A AIR CONDITIONING REFRIGERANT CIRCUIT > 5040AB REFRIGERANT CIRCUIT CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010262

> Note: Do not check the air conditioning system in the immediate vicinity of the walls (distance of approximately 2 m) in order to ensure sufficient circulation of the air by the condenser.
|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Connect the air conditioning system repressurizing station. Start up the engine and keep it idling. Set the required passenger compartment temperature to COLD (turn anticlockwise to stop). Set the fan to 4th speed. Switch on the air conditioning (LED on snowflake symbol on). Take the reading from the high pressure gauge and ensure it is greater than 13 bars | Move on to Step 4 |
| 2 | Check the cooling fan is on. Move on to Step 4 | Move on to Step 3 |
| 3 | Turn the ignition key to the ON position. With the engine off, perform active diagnosis on the cooling fan and ensure it is successful | Restore the electrical connections between the fan and engine control unit See E5020 ENGINE COOLING [→939003113] If necessary, replace the fan Op. 1088E10 RADIATOR COOLING FAN - R + R [→939010692] |
> Note: Before draining the air conditioning system, check the coolant circuit to ensure there are no leaks**Op. 5040A14 AIR CONDITIONING REFRIGERANT CIRCUIT - CHECK FOR LEAKS AND ELIMINATE IF NECESSARY BY TIGHTENING CONNECTORS**Check the connection to the expansion valve in particular.
|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 4 | Turn the ignition key OFF. Drain, empty and charge the air conditioning system with the specified amount of coolant. **Op. 5040A10 AIR CONDITIONING REFRIGERANT CIRCUIT - DRYING AND REPRESSURIZING** Run the engine for 15 minutes with the bonnet lid closed. Switch on the air conditioning (LED on snowflake symbol on). Set the required passenger compartment temperature to COLD (turn anticlockwise to stop). Adjust the air distribution to passenger head ventilation. Make sure that the recirculation is switched off. Increase the engine rpm up to 1500 rpm for 5 minutes. Take the reading from the high pressure gauge and ensure it is within the range between 9 and 36 bars | Move on to Step 6 |
| 5 | Take the reading from the low pressure gauge and ensure it is outside the range between 1.7 and 2.2 bars The test can be considered over | Move on to Step 6 |
| 6 | Take the readings from the high and low pressure gauges and ensure the pressure difference is at least 5 bars. | Replace the air conditioning compressor Op. 5040A20 AIR CONDITIONING COMPRESSOR - R+R - INCLUDES FLUID LEVEL CHECK AND TOP UP IF NECESSARY [→939010911] |
| 7 | Check that the coolant circuit is not blocked with ice or dirty | Clean the coolant circuit. If necessary, replace the damaged components Op. 5040A AIR CONDITIONING REFRIGERANT CIRCUIT [→939010910] |
| 8 | Replace the expansion valve Op. 5040B30 EXPANSION VALVE (TUBE ORIFICE) - R+R [→939010919] |  |

## 5040B SYSTEM SAFETY CONTROL DEVICES  [939010263]
- Path: Test > 50 AUXILIARY UNITS > 5040 AIR CONDITIONING CASING AND COMPONENTS > 5040B SYSTEM SAFETY CONTROL DEVICES
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010263
- Subtopics: 5040BC Climate control compressor linear sensor on/off check [939010264]; 5040BD LINEAR SENSOR OPERATION CHECK [939010265]

## 5040BC Climate control compressor linear sensor on/off check  [939010264]
- Path: Test > 50 AUXILIARY UNITS > 5040 AIR CONDITIONING CASING AND COMPONENTS > 5040B SYSTEM SAFETY CONTROL DEVICES > 5040BC Climate control compressor linear sensor on/off check
- Kind: test / check procedure
- Applies to: all engines; all production periods; only with equipment: Automatic Air Conditioning
- Web: https://sloeber94.github.io/elrnDB/#/939010264

Disconnect the electrical connection for the linear sensor.
See K120 LINEAR SENSOR FOR FANS [→939004261]
Check that Pin 1 is earthed and Pin 2 is at +5V.
Connect a linear potentiometer (end of scale 1 KOhm, previously positioned at around 500 ohm between the centre pin andone of the side ones) to the pins of the linear sensor electrical connector.
Turn the ignition key to the ON position.
Using a multimeter, check that the voltage between pins 1 and 3 is around 2.5V.
Switch on the engine and switch on the air conditioning using the special switch located on the climate control system control unit.
The climate control system should come on normally in these circumstances.
Alter the potentiometer resistance until the voltage reading on the multimeter between pins 1 and 3 is about 0 V.
The air conditioning system should switch off in these conditions because the engine management node receives low circuit pressure information.
Alter the potentiometer resistance until the voltage reading on the multimeter between pins 1 and 3 is about 4.6V.
The air conditioning system should switch off in these conditions because the engine management node receives high circuit pressure information.

## 5040BD LINEAR SENSOR OPERATION CHECK  [939010265]
- Path: Test > 50 AUXILIARY UNITS > 5040 AIR CONDITIONING CASING AND COMPONENTS > 5040B SYSTEM SAFETY CONTROL DEVICES > 5040BD LINEAR SENSOR OPERATION CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010265

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Press the START/STOP button and turn off the engine. Disconnect the wiring harness from the linear sensor (for the climate control system) See K120 LINEAR SENSOR FOR FANS [→939004261] Press the START/STOP button. Measure the voltage between Pin 2 of the wiring side connector and Earth, checking it is within the range between 4.8 and 5.2 V. Move on to Step 7 | Move on to Step 2 |
| 2 | Turn the ignition key OFF. Disconnect the wiring harness connector from the accelerator pedal potentiometer See K055 ACCELERATOR PEDAL POTENTIOMETER [→939004212] Turn the ignition key ON. Measure the voltage between Pin 2 of the sensor and Earth, checking it is within the range between 4.8 and 5.2 V. See K120 LINEAR SENSOR FOR FANS [→939004261] Move on to Step 5 | Move on to Step 6 |
| 3 | Disconnect the wiring harness connector from the air flow meter and repeat the measurement, checking the voltage is in the range between 4.8 and 5.2 V See K041 AIR FLOW METER [→939004191] | Move on to Step 6 |
| 4 | If faults are present, repair or if necessary replace the electrical wiring between the debimeter and the engine control unit. See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] The test can be considered over | Replace the debimeter Op. 1060G10 AIR FLOW METER - R.R. [→939010563] |
| 5 | If faults are present, repair or if necessary replace the electrical wiring between the accelerator pedal potentiometer and the engine control unit. See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] The test can be considered over | Replace the accelerator pedal Op. 1068A20 ACCELERATOR PEDAL WITH BUILT-IN POTENTIOMETER - R.R [→939010585] |
| 6 | If faults are present, repair or if necessary replace the electrical wiring between the linear sensor and the engine control unit. See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] The test can be considered over | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |
| 7 | Measure the voltage between Pins 1 and 2 of the sensor, checking it is within the range between 4.8 and 5.2 V. See K120 LINEAR SENSOR FOR FANS [→939004261] Move on to Step 10 | Move on to Step 8 |
| 8 | Press the START/STOP button. Disconnect from the air flow meter See K041 AIR FLOW METER [→939004191] Press the START/STOP button. Measure the voltage between Pins 1 and 2 of the sensor, checking it is within the range between 4.8 and 5.2 V. See K120 LINEAR SENSOR FOR FANS [→939004261] | Move on to Step 6 |
| 9 | If faults are present, repair or if necessary replace the electrical wiring between the linear sensor and the engine control unit. See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] The test can be considered over | Replace the pressure transducer Op. 5040B14 AIR CONDITIONING SYSTEM MULTISTAGE PRESSURE SWITCH - R+R [→939010918] |
| 10 | Display the A/C Pressure parameter (conditioned air) and check it is less than 0.3 V | Move on to Step 6 |
| 11 | Connect a shunt connection cable with a fuse between Pins 2 and 3 of the sensor See K120 LINEAR SENSOR FOR FANS [→939004261] Display the A/C Pressure parameter (conditioned air) and check it is less than 4.8 V Move on to Step 6 | Replace the pressure transducer Op. 5040B14 AIR CONDITIONING SYSTEM MULTISTAGE PRESSURE SWITCH - R+R [→939010918] |

## 5040C AIR CONDITIONING CASING AND COMPONENTS  [939010266]
- Path: Test > 50 AUXILIARY UNITS > 5040 AIR CONDITIONING CASING AND COMPONENTS > 5040C AIR CONDITIONING CASING AND COMPONENTS
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010266
- Subtopics: 5040CF Sequential procedure for checking air conditioner fan resistor operation [939010267]

## 5040CF Sequential procedure for checking air conditioner fan resistor operation  [939010267]
- Path: Test > 50 AUXILIARY UNITS > 5040 AIR CONDITIONING CASING AND COMPONENTS > 5040C AIR CONDITIONING CASING AND COMPONENTS > 5040CF Sequential procedure for checking air conditioner fan resistor operation
- Kind: test / check procedure
- Applies to: all engines; all production periods; only with equipment: Manual Air Conditioning
- Web: https://sloeber94.github.io/elrnDB/#/939010267

Disconnect the electrical connector for the passenger compartment air fan maximum speed relay
**See J041**
Connect a multimeter in ohmmeter mode between the following pins and measure:
- Between pins 1 and 4 a resistance of between 0.352 and 0.288 Ohm.
- Between pins 1 and 2 a resistance of between 2.232 and 1.488 Ohm.
- Between pins 1 and 2 a resistance of between 0.946 and 3 Ohm.

## 5040D AIR CONDITIONING CONTROLS  [939010268]
- Path: Test > 50 AUXILIARY UNITS > 5040 AIR CONDITIONING CASING AND COMPONENTS > 5040D AIR CONDITIONING CONTROLS
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010268
- Subtopics: 5040DB Check windscreen demister sensor operation [939010269]; 5040DC Check sunlight sensor operation [939010270]; 5040DD Check operation of pollution sensor (AQS) [939010271]; 5040DF Sequential procedure for checking air conditioner fan operation [939010272]

## 5040DB Check windscreen demister sensor operation  [939010269]
- Path: Test > 50 AUXILIARY UNITS > 5040 AIR CONDITIONING CASING AND COMPONENTS > 5040D AIR CONDITIONING CONTROLS > 5040DB Check windscreen demister sensor operation
- Kind: test / check procedure
- Applies to: all engines; all production periods; only with equipment: Automatic Air Conditioning
- Web: https://sloeber94.github.io/elrnDB/#/939010269

Using an Examiner set to the Voltmeter mode, select a 20 Volt full scale deflection and 5 seconds, connect the black probe to the vehicle earth and the red probe on pin 3 of the mist sensor output signal, turn the key on and press the START button.
The signal shown should be a set of PWM impulses with a frequency of 100 Hz and a Duty Cycle that varies between 10 and 90% as indicated in the table below.
> Note: The first 100 sensor output readings should not be considered (about 1 sec).
[image: https://sloeber94.github.io/elrnDB/media/939004556.jpg]
1. earth
2. +15
3. not connected
4. signal output
PWM% Duty Cycle = T1 / T2 where:
- T1= duration of impulse
- T2 = 1/f = 1/100 Hz = Duratation of transmission
- T2 = 10msec ± 7%
PWM of 20% at 70%
This is the normal sensor operating range.
Within this range, the sensor supplies a PWM signal proportional to the amount of condensation present on the windscreen.
PWM = 10%
Indicates an internal sensor fault. This fault is defined as follows:
the sensor self-diagnosis detected an internal electrical problem.
PWM = 80%
This condition indicates a sensor limit condition. This is defined as follows:
The sensor optics are saturated due to too much direct sunlight.
The signal is transmitted as long as the limit condition described above persists.
PWM = 90%
This condition indicates a sensor limit condition or failure. It is defined as one of the following:
The sensor optics are saturated due to too much reflected energy. This may be due to a very high level of condensation or an object between the windscreen surface and the sensor.
The internal sensor temperature reached and exceeded 70°C. The internal processor is disabled to avoid damage. A fault signal is transmitted as long as the excess temperature persists.
PWM = 0 % and 100%
These two conditions will never be transmitted by the sensor.
Specific hardware faults may be interpreted by the receiving input stage as PWM signals or 0% or 100% due to the static nature of the signal (microcomputer that does not process or conditions of dc to +12V or GND or open circuits).
Messages transmitted by PWM
100% Sensor " off " or fault in communication or d.c. to +12 V
90% Sensor saturated or locked in excess temperature
80% Sensor faulty or subject to direct sunlight
70% Condensation intensity Max to moderate
60% Condensation intensity moderate to slight
50% Condensation intensity light to identifiable
40% Condensation intensity slightly visible
30% Condensation intensity not visible to the human eye
20% Windscreen clean - No condensation
10% Internal sensor fault.
0% Sensor " off " or fault in communication or d.c. to GND

## 5040DC Check sunlight sensor operation  [939010270]
- Path: Test > 50 AUXILIARY UNITS > 5040 AIR CONDITIONING CASING AND COMPONENTS > 5040D AIR CONDITIONING CONTROLS > 5040DC Check sunlight sensor operation
- Kind: test / check procedure
- Applies to: all engines; all production periods; only with equipment: Automatic Air Conditioning
- Web: https://sloeber94.github.io/elrnDB/#/939010270

Use a multimeter to check that with the ignition key on, a voltage is present between Pins 1 and 4 and between Pins 3 and 4 of the solar radiation sensor that is proportioal to the heat energy present on the windscreen analysed by the sensor photodiodes: there should be a signal of less than 5 Volt (between 4.5 V - minimum solar rays - and 0.5 V - maximum solar rays).
See K090 SOLAR SENSOR [→939004244]
If there is a problem, using a multimeter and disconnecting the sensor, check with the ignition key in the ON position that the voltage between pins 1 and 4 and between pins 3 and 4 of the sensor supply connector is about 5 Volt.
See K090 SOLAR SENSOR [→939004244]

## 5040DD Check operation of pollution sensor (AQS)  [939010271]
- Path: Test > 50 AUXILIARY UNITS > 5040 AIR CONDITIONING CASING AND COMPONENTS > 5040D AIR CONDITIONING CONTROLS > 5040DD Check operation of pollution sensor (AQS)
- Kind: test / check procedure
- Applies to: all engines; all production periods; only with equipment: Automatic Air Conditioning
- Web: https://sloeber94.github.io/elrnDB/#/939010271

With the Examiner in voltmeter mode, select 20 Volts full scale deflection and 200 milliseconds base time
Connect the black probe of an Examiner to the vehicle earth and the red probe to pin 3 of the air quality sensor output signal
See K064 EXHAUST GAS PRESENCE SENSOR [→939004218]
Turn the key to the ON position.
Wait about 36 secs for the sensor to warm up.
Spray the gas in the canister (part no. 71715571) in less than 60 seconds.
Press the START button.
The signal shown should be a set of PWM impulses with a frequency of 100 Hz and a Duty Cycle that varies between 15 and 70% as indicated in the table below.
[image: https://sloeber94.github.io/elrnDB/media/939004557.jpg]
PWM% Duty Cycle = T1 / T2 where:
- T1= duration of impulse
- T2 = 1/f = 1/100 Hz = Duratation of transmission
Pin out:
- 1. +CH/15
- 2. earth
- 3. output signal
PWM signal meaning
5% short circuit to earth of signal line
15% non polluted air circulation
30% level 1 pollution
50% level 2 pollution
70% level 3 pollution
>90% short circuit +12 signal line

## 5040DF Sequential procedure for checking air conditioner fan operation  [939010272]
- Path: Test > 50 AUXILIARY UNITS > 5040 AIR CONDITIONING CASING AND COMPONENTS > 5040D AIR CONDITIONING CONTROLS > 5040DF Sequential procedure for checking air conditioner fan operation
- Kind: test / check procedure
- Applies to: all engines; all production periods; only with equipment: Manual Air Conditioning
- Web: https://sloeber94.github.io/elrnDB/#/939010272

Disconnect the electrical connector for the climate control fan
See H081 CLIMATE CONTROL FAN CONTROL [→939004101]
Position the fan speed knob in neutral postion (fan symbol) and check that:
- There is an open circuit between pins 1 and 2.
- There is an open circuit between pins 1 and 3.
- There is an open circuit between pins 1 and 5.
Place the fan speed knob at 1 and check that:
- There is electrical continuity between pins 1 and 2.
- There is an open circuit between pins 1 and 3.
- There is an open circuit between pins 1 and 5.
Place the fan speed knob at 2 and check that:
- There is electrical continuity between pins 1 and 3.
- There is an open circuit between pins 1 and 2.
- There is an open circuit between pins 1 and 5.
Place the fan speed knob at 3 and check that:
- There is electrical continuity between pins 1 and 2.
- There is an open circuit between pins 1 and 3.
- There is an open circuit between pins 1 and 5.
Place the fan speed knob at 4 and check that:
- There is electrical continuity between pins 1 and 5.
- There is an open circuit between pins 1 and 2.
- There is an open circuit between pins 1 and 3.
Reconnect the electrical connector for the control.
See H081 CLIMATE CONTROL FAN CONTROL [→939004101]
Disconnect the electrical connector for the climate control system control unit
See M070 CLIMATE CONTROL SYSTEM CONTROL UNIT [→939004373]
Place the fan speed knob in position 1 and check that the voltage between pins 2 and 6 is between 9.6 and 14.4 V.

## 5040O AIR CONDITIONING CASING AND COMPONENTS TESTS  [939004800]
- Path: Test > 50 AUXILIARY UNITS > 5040 AIR CONDITIONING CASING AND COMPONENTS > 5040O AIR CONDITIONING CASING AND COMPONENTS TESTS
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939004800
- Subtopics: 5040OB Air conditioning system operational check (pressure) [939004801]

## 5040OB Air conditioning system operational check (pressure)  [939004801]
- Path: Test > 50 AUXILIARY UNITS > 5040 AIR CONDITIONING CASING AND COMPONENTS > 5040O AIR CONDITIONING CASING AND COMPONENTS TESTS > 5040OB Air conditioning system operational check (pressure)
- Kind: test / check procedure
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939004801

## 55 ELECTRICAL EQUIPMENT  [939010275]
- Path: Test > 55 ELECTRICAL EQUIPMENT
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010275
- Subtopics: 5505 INSTRUMENT/GAUGE ELECTRICAL CIRCUITS [939010276]; 5510 ENGINE IGNITION [939010329]; 5520 ENGINE STARTING [939010281]; 5530 CURRENT GENERATION [939010288]; 5540 EXTERIOR LIGHTING [939005428]; 5550 WARNING AND MANOEUVRING INDICATORS [939010295]; 5560 INSTRUMENTS [939010332]; 5570 ACCESSORIES [939010298]; 5580 SPECIAL ACCESSORIES [939010301]

## 5505 INSTRUMENT/GAUGE ELECTRICAL CIRCUITS  [939010276]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5505 INSTRUMENT/GAUGE ELECTRICAL CIRCUITS
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010276
- Subtopics: 5505A MULTI-FUNCTION COMPONENTS [939010277]

## 5505A MULTI-FUNCTION COMPONENTS  [939010277]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5505 INSTRUMENT/GAUGE ELECTRICAL CIRCUITS > 5505A MULTI-FUNCTION COMPONENTS
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010277
- Subtopics: 5505AF CHECK OF THE EFFICIENCY OF KEY ACKNOWLEDGEMENT DEVICE [939010278]; 5505AE ENGINE MANAGEMENT CONTROL UNIT POWER SUPPLY FUSE CIRCUIT CHECK [939010279]; 5505AG CHECK SPARK PLUG HEATING FUSE [939010280]

## 5505AF CHECK OF THE EFFICIENCY OF KEY ACKNOWLEDGEMENT DEVICE  [939010278]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5505 INSTRUMENT/GAUGE ELECTRICAL CIRCUITS > 5505A MULTI-FUNCTION COMPONENTS > 5505AF CHECK OF THE EFFICIENCY OF KEY ACKNOWLEDGEMENT DEVICE
- Kind: test / check procedure
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010278

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Insert the key in the key reader device and check that the wheel lights up to indicate that the B-CAN network is active. Check that the steering is released. | Restore B-Can continuity See E1050 CAN CONNECTION LINES [→939011452] |
| 2 | Connect the diagnostic tester to the TEG Reader node. Insert the key in the reader and ensure the system recognises the key. The test can be considered over | Replace the key and store it in the Teg Reader node. Move on to Step 3 |
| 3 | With the diagnostic instrument in Voltmeter mode, connect the positive probe to ignition Pin 6 and the negative to earth. See H003 IGNITION DEVICE [→939004060] Check that there is a 12 Volt voltage present. | Replace the key recognition device Op. 5505A31 ELECTRONIC KEY ACKNOWLEDGEMENT DEVICE - R. R. [→939010968] |
| 4 | Disconnect the wiring from the device connector See H003 IGNITION DEVICE [→939004060] Connect the diagnostic instrument in Ohmmeter mode with the probe between Pin 6 of the device and earth See H003 IGNITION DEVICE [→939004060] Check for the presence of a resistance less than 1 Ohm. | Reset the earth connection of the right facia area See E1020 EARTHS - DESCRIPTION [→939003314] |
| 5 | With the diagnostic instrument in Voltmeter mode, connect the positive probe to device Pin 2 and the negative to earth See H003 IGNITION DEVICE [→939004060] Check that there is a 12 Volt voltage present. | Replace the key recognition device Op. 5505A31 ELECTRONIC KEY ACKNOWLEDGEMENT DEVICE - R. R. [→939010968] |

## 5505AE ENGINE MANAGEMENT CONTROL UNIT POWER SUPPLY FUSE CIRCUIT CHECK  [939010279]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5505 INSTRUMENT/GAUGE ELECTRICAL CIRCUITS > 5505A MULTI-FUNCTION COMPONENTS > 5505AE ENGINE MANAGEMENT CONTROL UNIT POWER SUPPLY FUSE CIRCUIT CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010279

| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Press the START/STOP button and turn off the engine. Turn off all the electrical users. Reinsert fuse F18 in the engine compartment junction unit base Press the START/STOP button and check that the fuse cuts in | A temporary current overload has occurred in the system behind fuse F18. |
| 2 | Disconnect the cable loom connector from the engine management control unit connector A. Refit fuse F18 in the control unit base See B001 JUNCTION UNIT [→939003748] and check it cuts in | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |
| 3 | If faults occur, repair or if necessary replace the engine compartment junction unit wiring See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] | Replace the engine compartment junction unit Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] |

## 5505AG CHECK SPARK PLUG HEATING FUSE  [939010280]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5505 INSTRUMENT/GAUGE ELECTRICAL CIRCUITS > 5505A MULTI-FUNCTION COMPONENTS > 5505AG CHECK SPARK PLUG HEATING FUSE
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010280

| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Press the START/STOP button and turn off the engine. Reconnect all the disconnected components. Turn off all the electrical users. Insert a new fuse F11 in the engine compartment junction unit and check it does not blow. Move on to Step 3 | Move on to Step 2 |
| 2 | If necessary, repair errors in the wiring between the engine compartment junction unit and spark plug control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] The test can be considered over | Replace the glow plug preheating unit Op. 5520C20 HEATER PLUGS CONTROL UNIT - R.R [→939011001] |
| 3 | Press the START/STOP button. Check that fuse F11 cuts in | A temporary current overload has occurred in the circuit behind fuse F11. connect the electrical connectors for the junction unit. |
| 4 | Press the START/STOP button. Disconnect the harness from a spark plug. Fit a new fuse F11 and check it does not blow. Reconnect the spark plugs and disconnect another, repeating the test until all the spark plugs have been checked. | Replace the spark plug that does not trigger the fuse Op. 5520C10 HEATER PLUGS - R+R [→939011002] |
| 5 | If necessary, repair the faults in the wiring between the spark plug control unit and the glow plugs See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] | Replace the glow plug preheating unit Op. 5520C20 HEATER PLUGS CONTROL UNIT - R.R [→939011001] |

## 5510 ENGINE IGNITION  [939010329]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5510 ENGINE IGNITION
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010329
- Subtopics: 5510C COIL, ECU, SENSORS [939010330]; 5510D SPARK PLUGS AND LEADS [939005367]

## 5510C COIL, ECU, SENSORS  [939010330]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5510 ENGINE IGNITION > 5510C COIL, ECU, SENSORS
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010330
- Subtopics: 5510CG CHECK TIMING SENSOR OPERATION [939010331]; 5510CC IGNITION COIL CHECK [939005365]; 5510CC IGNITION COIL CHECK [939005366]

## 5510CG CHECK TIMING SENSOR OPERATION  [939010331]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5510 ENGINE IGNITION > 5510C COIL, ECU, SENSORS > 5510CG CHECK TIMING SENSOR OPERATION
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010331

| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Press the START/STOP button and turn off the engine. Disconnect the wiring harness connector from the timing sensor. Press the START/STOP button. Check that the voltage across pin 1 of the control unit See K047 TIMING SENSOR [→939004199] and earth is between 4.8 and 5.2 V | Repair or if necessary replace the electrical wiring between the timing sensor and the engine control unit See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 2 | Check that the voltage across pin 1 and 3 of the sensor See K047 TIMING SENSOR [→939004199] is between 4.8 and 5.2 V Move on to Step 4 | Move on to Step 3 |
| 3 | Repair any faults in the wiring between the engine control unit and the timing sensor See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] The test can be considered over | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |
| 4 | Check that the voltage across pin 2 of the control unit See K047 TIMING SENSOR [→939004199] and earth is between 4.8 and 5.2 V | Move on to Step 3 |
| 5 | Check for faults in the timing sensor, such as intermittent contacts, missing teeth, reference point or incorrect gap | Restore correct operation. Replace the timing sensor if necessary **Op. 5510CG CHECK ON OPERATION OF TIMING SENSOR** |
| 6 | Replace the timing sensor **Op. 5510CG CHECK ON OPERATION OF TIMING SENSOR** and check the fault has disappeared. The test can be considered over | Repair the original timing sensor and replace the engine management control unit. Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |

## 5510CC IGNITION COIL CHECK  [939005365]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5510 ENGINE IGNITION > 5510C COIL, ECU, SENSORS > 5510CC IGNITION COIL CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTS, 2.2 JTS; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005365

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Connect the diagnostic equipment and check that none of the following errors is present: P0300, P0301, P0302, P0303, P0304 | Continue as described by the diagnostic equipment |
| 2 | Start the engine and let it warm up. Keep the engine at a speed of 2000 rpm and check that there is no misfire. | The test may be considered over. Move on to Step 3 |
| 3 | Press the START/STOP button (engine off). Disconnect the corresponding cylinder coil. Press the START/STOP button (panel on). Measure the voltage between Pin 2 of the coil See A030 IGNITION COIL [→939003625] and the Earth, checking that it corresponds to the battery voltage | Move on to Step 7 |
| 4 | Measure the voltage between Pins 2 and 3 of the coil See A030 IGNITION COIL [→939003625] checking that it corresponds to the battery voltage | Restore or, if necessary, replace the electrical wiring See E5030 PETROL ENGINES ELECTRONIC MANAGEMENT [→939004361] Move on to Step 9 |
| 5 | Measure the voltage between Pins 2 and 4 of the coil See A030 IGNITION COIL [→939003625] checking that it corresponds to the battery voltage | Restore or, if necessary, replace the electrical wiring See E5030 PETROL ENGINES ELECTRONIC MANAGEMENT [→939004361] Move on to Step 9 |
| 6 | If faults are present, repair or if necessary replace the ignition coil electrical wiring. See E5030 PETROL ENGINES ELECTRONIC MANAGEMENT [→939004361] Move on to Step 9 | Replace the faulty ignition coil **Op. 5510C05 ELECTRONIC POWER MODULE - R R** Move on to Step 9 |
| 7 | Check that none of the components connected to the same line as the coil has faults in the electrical connections such as short circuits or poor insulation See E5030 PETROL ENGINES ELECTRONIC MANAGEMENT [→939004361] | Restore or, if necessary, replace the electrical wiring See E5030 PETROL ENGINES ELECTRONIC MANAGEMENT [→939004361] Move on to Step 9 |
| 8 | Replace the coil protective fuse See E5030 PETROL ENGINES ELECTRONIC MANAGEMENT [→939004361] |  |
| 9 | Reconnect all the electrical components disconnected previously. Using the diagnostic equipment delete the errors in the engine management control unit. Start the engine and check that there are no longer any errors | Continue as described by the diagnostic equipment |

## 5510CC IGNITION COIL CHECK  [939005366]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5510 ENGINE IGNITION > 5510C COIL, ECU, SENSORS > 5510CC IGNITION COIL CHECK
- Kind: test / check procedure
- Applies to: engines: 3.2 JTS; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005366

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Connect the diagnostic equipment and check that none of the following errors is present: P0300, P0301, P0302, P0303, P0304, P0305, P0306 | Continue as described by the diagnostic equipment |
| 2 | Start up the engine and let it warm up. Keep the engine at a speed of 2000 rpm and check that there is no misfire. The test can be considered over | Move on to Step 3 |
| 3 | Check that the errors have been detected at all the cylinders in one bank (P0301, P0302 and P0303 or P0304, P0305 and P0306 respectively). Move on to Step 10 | Move on to Step 4 |
| 4 | Press the START/STOP button (engine off). Disconnect the corresponding cylinder coil. Press the START/STOP button (panel on). Measure the voltage between Pin 2 of the coil See A030 IGNITION COIL [→939003625] and the Earth, checking that it corresponds to the battery voltage | Move on to Step 8 |
| 5 | Measure the voltage between Pins 2 and 3 of the coil See A030 IGNITION COIL [→939003625] checking that it corresponds to the battery voltage | Restore or, if necessary, replace the electrical wiring See E5030 PETROL ENGINES ELECTRONIC MANAGEMENT [→939004361] Move on to Step 11 |
| 6 | Measure the voltage between Pins 2 and 4 of the coil See A030 IGNITION COIL [→939003625] checking that it corresponds to the battery voltage | Restore or, if necessary, replace the electrical wiring See E5030 PETROL ENGINES ELECTRONIC MANAGEMENT [→939004361] Move on to Step 11 |
| 7 | If faults are present, repair or if necessary replace the ignition coil electrical wiring. See E5030 PETROL ENGINES ELECTRONIC MANAGEMENT [→939004361] Move on to Step 11 | Replace the faulty ignition coil Op. 5510C14 IGNITION COIL/S - R.R. [→939010988] Move on to Step 11 |
| 8 | Check that none of the components connected to the same line as the coil has faults in the electrical connections such as short circuits or poor insulation See E5030 PETROL ENGINES ELECTRONIC MANAGEMENT [→939004361] | Restore or, if necessary, replace the electrical wiring See E5030 PETROL ENGINES ELECTRONIC MANAGEMENT [→939004361] Move on to Step 11 |
| 9 | Replace the coil protective fuse See E5030 PETROL ENGINES ELECTRONIC MANAGEMENT [→939004361] Move on to Step 11 |  |
| 10 | If faults are present, repair or if necessary replace the ignition coil electrical wiring. See E5030 PETROL ENGINES ELECTRONIC MANAGEMENT [→939004361] |  |
| 11 | Reconnect all the electrical components disconnected previously. Using the diagnostic equipment, delete the errors in the engine management control unit. Start the engine and check that there are no longer any errors | Continue as described by the diagnostic equipment |

## 5510D SPARK PLUGS AND LEADS  [939005367]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5510 ENGINE IGNITION > 5510D SPARK PLUGS AND LEADS
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005367
- Subtopics: 5510DA SPARK PLUG STATE CHECK [939005368]; 5510DA SPARK PLUG STATUS CHECK [939005369]

## 5510DA SPARK PLUG STATE CHECK  [939005368]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5510 ENGINE IGNITION > 5510D SPARK PLUGS AND LEADS > 5510DA SPARK PLUG STATE CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTS, 2.2 JTS; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005368

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Disconnect the high tension lead from the individual spark plugs and check that there is no microwelding at the terminal of the actual spark plugs | Replace the damaged spark plugs Op. 5510D10 SPARK PLUGS - R+R [→939010993] |
| 2 | Remove the spark plugs from the engine head Op. 5510D10 SPARK PLUGS - R+R [→939010993] and check that there are no signs of fouling like those illustrated in the diagrams below | Move on to Step 6 |
[image: https://sloeber94.github.io/elrnDB/media/946000927.jpg]
[image: https://sloeber94.github.io/elrnDB/media/946000928.jpg]
|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 3 | Check that the spark plug earth electrodes are not bent or out of alignment as illustrated below | Move on to Step 6 |
[image: https://sloeber94.github.io/elrnDB/media/946000929.jpg]
|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 4 | Check that the spark plug ceramic insulator nozzle is not damaged as illustrated below | Move on to Step 6 |
[image: https://sloeber94.github.io/elrnDB/media/946000930.jpg]
|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 5 | Using a tester, check that the resistance between the connection terminal and the centre electrode (shown in the diagram below) for each spark plug is between 2 and 50 kOhm. The test is over | Replace the spark plugs outside the range Op. 5510D10 SPARK PLUGS - R+R [→939010993] |
[image: https://sloeber94.github.io/elrnDB/media/946000931.jpg]
|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 6 | Connect the diagnostic equipment and check that error P0300 is present together with at least one other error out of P0301, P0302, P0303, P0304 | Replace the set of spark plugs Op. 5510D10 SPARK PLUGS - R+R [→939010993] |
| 7 | Replace the spark plugs in the cylinders where the error was detected (e.g. for P0301 the spark plug for cylinder 1) Op. 5510D10 SPARK PLUGS - R+R [→939010993] |  |

## 5510DA SPARK PLUG STATUS CHECK  [939005369]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5510 ENGINE IGNITION > 5510D SPARK PLUGS AND LEADS > 5510DA SPARK PLUG STATUS CHECK
- Kind: test / check procedure
- Applies to: engines: 3.2 JTS; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005369

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Disconnect the high tension lead from the individual spark plugs and check there are no microwelds on the spark plug terminal | Replace the damaged spark plugs Op. 5510D10 SPARK PLUGS - R+R [→939010993] |
| 2 | Remove the spark plugs from the cylinder head Op. 5510D10 SPARK PLUGS - R+R [→939010993] and check for signs of fouling, such as those shown in the following figures | Move on to Step 6 |
[image: https://sloeber94.github.io/elrnDB/media/946000927.jpg]
[image: https://sloeber94.github.io/elrnDB/media/946000928.jpg]
|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 3 | Check that the spark plug earth electrodes are not bent or misaligned as shown in the following figure | Move on to Step 6 |
[image: https://sloeber94.github.io/elrnDB/media/946000929.jpg]
|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 4 | Check that the spark plug ceramic insulator is not damaged, as shown in the following figure | Move on to Step 6 |
[image: https://sloeber94.github.io/elrnDB/media/946000930.jpg]
|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 5 | Use a tester to ensure that the resistance between the connection terminal and the central electrode (shown in the following figure) of each spark plug is between 2 and 50 kOhms. | The test is complete. Replace spark plugs not within the range Op. 5510D10 SPARK PLUGS - R+R [→939010993] |
[image: https://sloeber94.github.io/elrnDB/media/946000931.jpg]
|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 6 | Connect the diagnostic instrument and ensure that error P0300 is present at the same time as at least one other from among P0301, P0302, P0303, P0304, P0305, P0306 | Replace the spark plug set Op. 5510D10 SPARK PLUGS - R+R [→939010993] |
| 7 | Replace the spark plugs within whose cylinders the error was detected (e.g. the spark plug of cylinder 1 for P0301) Op. 5510D10 SPARK PLUGS - R+R [→939010993] |  |

## 5520 ENGINE STARTING  [939010281]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5520 ENGINE STARTING
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010281
- Subtopics: 5520G EASY-GO STARTING SYSTEM [939010282]; 5520B STARTER MOTOR AND COMPONENTS [939010284]; 5520C COLD STARTING SYSTEM (DIESEL ENGINES) [939010286]

## 5520G EASY-GO STARTING SYSTEM  [939010282]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5520 ENGINE STARTING > 5520G EASY-GO STARTING SYSTEM
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010282
- Subtopics: 5520GA IGNITION PUSH BUTTON CHECK [939010283]

## 5520GA IGNITION PUSH BUTTON CHECK  [939010283]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5520 ENGINE STARTING > 5520G EASY-GO STARTING SYSTEM > 5520GA IGNITION PUSH BUTTON CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010283

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Insert the key in the key recognition device and ensure that the surround lights up. Continue to Step 3 | Proceed as instructed See Test 5505AF CHECK OF THE EFFICIENCY OF KEY ACKNOWLEDGEMENT DEVICE [→939010278 5505AF CHECK OF THE EFFICIENCY OF KEY ACKNOWLEDGEMENT DEVICE] |
| 2 | Check and if necessary restore the +15 power supply to Pin 1 of the ignition button See H002 STARTING PUSH BUTTON [→939004057] Move on to Step 6. | Replace the ignition button Op. 5520G30 START/STOP SWITCH FOR EASY-GO SYSTEM STARTER MOTOR - R.R. [→939011004] |
| 3 | With the diagnostic instrument in Voltmeter mode, connect the positive probe to ignition Pin 3 of the ignition device and the negative to earth. See H003 IGNITION DEVICE [→939004060] Check that there is a 12 Volt voltage present. | Move on to Step 5 |
| 4 | Check and if necessary restore the continuity of the wiring between Pin B2 of the power steering control unit and Pin 3 of the button See M089 STEERING LOCK CONTROL UNIT (NBS) [→939004386] See H002 STARTING PUSH BUTTON [→939004057] The test can be considered over | Proceed as instructed See Test 5580ED ELECTRIC STEERING LOCK CHECK [→939010314 5580ED ELECTRIC STEERING LOCK CHECK] |
| 5 | Disconnect the button connector. See H002 STARTING PUSH BUTTON [→939004057] Connect the diagnostic tester in Ohmmeter mode across Pin 2 and Earth, checking that the resistance reading is less than 1 Ohm. | Reset the earth connection of the right facia area See E1020 EARTHS - DESCRIPTION [→939003314] |
| 6 | With the diagnostic instrument in Voltmeter mode, connect the positive probe to button Pin 4 and the negative to earth See H002 STARTING PUSH BUTTON [→939004057] Press the ignition button and check the voltage is 12 Volts. | Replace the ignition button Op. 5520G30 START/STOP SWITCH FOR EASY-GO SYSTEM STARTER MOTOR - R.R. [→939011004] |
| 7 | With the diagnostic instrument in Voltmeter mode, connect the positive probe to device Pin 5 and the negative to earth See H003 IGNITION DEVICE [→939004060] Check for a voltage of 12 Volts. Continue to Step 9. | Move on to Step 8. |
| 8 | Check and if necessary restore the continuity of the wiring between Pin A8 of the control unit and Pin 5 of the button See M089 STEERING LOCK CONTROL UNIT (NBS) [→939004386] See H002 STARTING PUSH BUTTON [→939004057] The test can be considered over | Proceed as instructed See Test 5580ED ELECTRIC STEERING LOCK CHECK [→939010314 5580ED ELECTRIC STEERING LOCK CHECK] |
| 9 | With the diagnostic instrument in Voltmeter mode, connect the positive probe to button Pin 6 and the negative to earth See H002 STARTING PUSH BUTTON [→939004057] Press the ignition button and check the voltage is 12 Volts. | Replace the ignition button Op. 5520G30 START/STOP SWITCH FOR EASY-GO SYSTEM STARTER MOTOR - R.R. [→939011004] |
| 10 | Insert the key into the reader device, with the diagnostic instrument in Voltmeter mode, connect the positive probe to button Pin 7 and the negative to earth See H002 STARTING PUSH BUTTON [→939004057] Check for a PWM signal. The test can be considered over | Move on to Step 11 |
| 11 | Check and if necessary restore the continuity of the wiring between Pin C2 of the control unit and Pin 7 of the button See M089 STEERING LOCK CONTROL UNIT (NBS) [→939004386] See H002 STARTING PUSH BUTTON [→939004057] | Proceed as instructed See Test 5580ED ELECTRIC STEERING LOCK CHECK [→939010314 5580ED ELECTRIC STEERING LOCK CHECK] |

## 5520B STARTER MOTOR AND COMPONENTS  [939010284]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5520 ENGINE STARTING > 5520B STARTER MOTOR AND COMPONENTS
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010284
- Subtopics: 5520BA ENGINE IGNITION SYSTEM CHECK [939010285]

## 5520BA ENGINE IGNITION SYSTEM CHECK  [939010285]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5520 ENGINE STARTING > 5520B STARTER MOTOR AND COMPONENTS > 5520BA ENGINE IGNITION SYSTEM CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010285

> Block applies to: engines: 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Connect a charged battery in paralle with the vehicle battery. Start the engine. Move on to Step 13 | Move on to Step 2 |
| 2 | Turn the ignition key OFF. Disconnect the wiring harness connector from engine control unit connector A See M010 ENGINE MANAGEMENT ECU [→939004314] Do not engage any gear. Turn the ignition key ON. Connect the emergency starting lead for a maximum of 3 secs. between pin 72 of control unit wiring side connector A and earth, checking that the engine does not start. See M010 ENGINE MANAGEMENT ECU [→939004314] | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |
| 3 | Turn the ignition key OFF. In the engine compartment junction unit, remove relay T9 (in the middle of the lower row) See B001 JUNCTION UNIT [→939003748] Turn the ignition key ON. Measure the voltage between Pin 85 of the base unit and Earth, ensuring it is less than 0.3 V. Move on to Step 5 | Move on to Step 4 |
| 4 | If faults are present, repair or, if necessary, replace the electrical wiring between the engine management control unit and the engine compartment junction unit. See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] The test can be considered over | Replace the engine compartment junction unit Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] |
| 5 | Turn the ignition key OFF. Measure the resistance between Pin 72 of control unit connector A and Pin 85 of control unit connector A to ensure it is less than 5 Ohms See M010 ENGINE MANAGEMENT ECU [→939004314] See B001 JUNCTION UNIT [→939003748] | Move on to Step 4 |
| 6 | Turn the ignition key OFF. Measure the voltage between Pin 30 of the control unit base unit and the earth, ensuring it is greater than 11 V. See B001 JUNCTION UNIT [→939003748] Move on to Step 8 | Move on to Step 7 |
| 7 | If faults are present, repair or, if necessary, replace the electrical wiring between the battery and the engine compartment junction unit. See E1010 POWER SUPPLY [→939011442] The test can be considered over | Replace the engine compartment junction unit Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] |
| 8 | Connect the emergency starting lead for a maximum of 3 secs. between pins 30 and 87 of the control unit base, checking that the engine does not start. See B001 JUNCTION UNIT [→939003748] Move on to Step 12 | Move on to Step 9 |
| 9 | Measure the resistance between Pin 87 of the control unit base and Pin 50 (wiring side) of the starter motor, checking that it is less than 5 Ohm See B001 JUNCTION UNIT [→939003748] See A020 STARTER MOTOR [→939003234] Move on to Step 11 | Move on to Step 10 |
| 10 | If faults are present, repair or if necessary replace the electrical wiring between the engine compartment junction unit and the starter motor See E5010 STARTING AND RECHARING [→939011733] The test can be considered over | Replace the engine compartment junction unit Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] |
| 11 | If faults are present, repair or if necessary replace the electrical wiring between the battery, starter motor and earth See E5010 STARTING AND RECHARING [→939011733] The test can be considered over | Replace the starter motor **Op. 5520b12 STARTER MOTOR - R+R FOR VERSIONS WITH A/C** |
| 12 | Turn the ignition key ON. Measure the voltage between Pin 86 of the control unit base unit and the earth, ensuring it is less than 11 V. See B001 JUNCTION UNIT [→939003748] Move on to Step 10 | Replace the starter motor **Op. 5520b12 STARTER MOTOR - R+R FOR VERSIONS WITH A/C** |
| 13 | Turn the ignition key to the OFF position and extract it. Turn off all the electrical users. Charge or, if necessary, replace the battery. Disconnect the connector from the battery cable loom. See A001 BATTERY [→939004879] Measure the current between pin A (wiring side) and pin A (component side) of the battery, checking that it is less than 80 mA. Move on to Step 15 | Move on to Step 14 |
> Note: All the vehicle systems should be switched off during the test. Close the doors and the tailgate, disconnect the engine compartment lighting.
|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 14 | The stall current for one or more consumers is too high. During the search for faults in the wiring, the sections of the wiring for the allocated connectors can be separated. When the stall current moves to the permitted value, after the section has been separated, this means that the fault is located in this section of the wiring. The test can be considered over |  |
| 15 | Reconnect the connector to the battery cable loom. See A001 BATTERY [→939004879] Start the engine and switch on all the electrical consumers. Let the engine speed reach 3000 rpm. Measure the voltage between pin A and pin B of the battery (wiring side), checking that it is less than 12.5 V | Replace the battery Op. 5530B10 BATTERY - R+R [→939011011] |
| 16 | Turn the ignition key OFF. Disconnect the connector from the alternator cable loom. See A010 ALTERNATOR [→939003227] Turn the ignition key ON. Measure the voltage between Pin D+ (wiring side) of the alternator and earth, checking that it is more than 11 V See A010 ALTERNATOR [→939003227] | Move on to Step 18 |
| 17 | If faults are present, repair or if necessary replace the electrical wiring between the battery, alternator and earth See E5010 STARTING AND RECHARING [→939011733] The test can be considered over | Replace the alternator. Op. 5530A10 ALTERNATOR - R+R [→939011014] |
| 18 | If faults are present, repair or if necessary replace the electrical wiring between the alternator and the engine management control unit See E5010 STARTING AND RECHARING [→939011733] | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |

> Block applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods; only with equipment: C.A.E.
|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Connect a charged battery in paralle with the vehicle battery. Position the gearlever on P. Start the engine. Move on to Step 15 | Move on to Step 2 |
| 2 | Turn the ignition key OFF. Disconnect the wiring harness connector from engine control unit connector A See M010 ENGINE MANAGEMENT ECU [→939004314] Position the gearlever on N. Turn the ignition key ON. Connect the emergency starting lead for a maximum of 3 secs. between pin 72 of control unit wiring side connector A and earth, checking that the engine does not start. See M010 ENGINE MANAGEMENT ECU [→939004314] | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |
| 3 | Turn the ignition key OFF. In the engine compartment junction unit, remove relay T9 (in the middle of the lower row) See B001 JUNCTION UNIT [→939003748] Turn the ignition key ON. Measure the voltage between Pin 85 of the base unit and Earth, ensuring it is less than 0.3 V. Move on to Step 5 | Move on to Step 4 |
| 4 | If faults are present, repair or, if necessary, replace the electrical wiring between the engine management control unit and the engine compartment junction unit. See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] The test can be considered over | Replace the engine compartment junction unit Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] |
| 5 | Turn the ignition key OFF. Measure the resistance between Pin 72 of control unit connector A and Pin 85 of control unit connector A to ensure it is less than 5 Ohms See M010 ENGINE MANAGEMENT ECU [→939004314] See B001 JUNCTION UNIT [→939003748] | Move on to Step 4 |
| 6 | Turn the ignition key OFF. Measure the voltage between Pin 30 of the control unit base unit and the earth, ensuring it is greater than 11 V. See B001 JUNCTION UNIT [→939003748] Move on to Step 8 | Move on to Step 7 |
| 7 | If faults are present, repair or, if necessary, replace the electrical wiring between the battery and the engine compartment junction unit. See E1010 POWER SUPPLY [→939011442] The test can be considered over | Replace the engine compartment junction unit Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] |
| 8 | Connect the emergency starting lead for a maximum of 3 secs. between pins 30 and 87 of the control unit base, checking that the engine does not start. See B001 JUNCTION UNIT [→939003748] Move on to Step 12 | Move on to Step 9 |
| 9 | Measure the resistance between Pin 87 of the control unit base and Pin 50 (wiring side) of the starter motor, checking that it is less than 5 Ohm See B001 JUNCTION UNIT [→939003748] See A020 STARTER MOTOR [→939003234] Move on to Step 11 | Move on to Step 10 |
| 10 | If faults are present, repair or if necessary replace the electrical wiring between the engine compartment junction unit and the starter motor See E5010 STARTING AND RECHARING [→939011733] The test can be considered over | Replace the engine compartment junction unit Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] |
| 11 | If faults are present, repair or if necessary replace the electrical wiring between the battery, starter motor and earth See E5010 STARTING AND RECHARING [→939011733] The test can be considered over | Replace the starter motor **Op. 55** |
| 12 | Turn the ignition key ON. Measure the voltage between Pin 86 of the control unit base unit and the earth, ensuring it is less than 11 V. See B001 JUNCTION UNIT [→939003748] | Replace the starter motor **Op. 55** |
| 13 | Measure the resistance between Pin 1 (wiring side) of the control unit and the output contact of fuse F24 (first on the left in the upper row), checking that the resistance is greater than 5 Ohms. See M055 AUTOMATIC TRANSMISSION CONTROL UNIT [→939005904] | Replace the automatic transmission control unit **Op. 2135B52 ELECTRONIC AUTOMATIC TRANSMISSION ELECTRIC CIRCUIT -ECU MOUNT R R** |
| 14 | If faults are present, repair or, if necessary, replace the electrical wiring between the engine compartment junction unit and the automatic transmission control unit. See E7050 AUTOMATIC TRANSMISSION [→939005826] The test can be considered over | Replace the engine compartment junction unit Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] |
| 15 | Turn the ignition key to the OFF position and extract it. Turn off all the electrical users. Charge or, if necessary, replace the battery. Disconnect the connector from the battery cable loom. See A001 BATTERY [→939004879] Measure the current between pin A (wiring side) and pin A (component side) of the battery, checking that it is less than 80 mA. Move on to Step 17 | Move on to Step 16 |
> Note: All the vehicle systems should be switched off during the test. Close the doors and the tailgate, disconnect the engine compartment lighting.
|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 16 | The stall current for one or more consumers is too high. During the search for faults in the wiring, the sections of the wiring for the allocated connectors can be separated. When the stall current moves to the permitted value, after the section has been separated, this means that the fault is located in this section of the wiring. The test can be considered over |  |
| 17 | Reconnect the connector to the battery cable loom. See A001 BATTERY [→939004879] Start the engine and switch on all the electrical consumers. Let the engine speed reach 3000 rpm. Measure the voltage between pin A and pin B of the battery (wiring side), checking that it is less than 12.5 V | Replace the battery Op. 5530B10 BATTERY - R+R [→939011011] |
| 18 | Turn the ignition key OFF. Disconnect the connector from the alternator cable loom. See A010 ALTERNATOR [→939003227] Turn the ignition key ON. Measure the voltage between Pin D+ (wiring side) of the alternator and earth, checking that it is more than 11 V See A010 ALTERNATOR [→939003227] | Move on to Step 20 |
| 19 | If faults are present, repair or if necessary replace the electrical wiring between the battery, alternator and earth See E5010 STARTING AND RECHARING [→939011733] The test can be considered over | Replace the alternator. Op. 5530A10 ALTERNATOR - R+R [→939011014] |
| 20 | If faults are present, repair or if necessary replace the electrical wiring between the alternator and the engine management control unit See E5010 STARTING AND RECHARING [→939011733] | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |

## 5520C COLD STARTING SYSTEM (DIESEL ENGINES)  [939010286]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5520 ENGINE STARTING > 5520C COLD STARTING SYSTEM (DIESEL ENGINES)
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010286
- Subtopics: 5520CA GLOW PLUGS FUNCTIONAL TEST [939010287]

## 5520CA GLOW PLUGS FUNCTIONAL TEST  [939010287]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5520 ENGINE STARTING > 5520C COLD STARTING SYSTEM (DIESEL ENGINES) > 5520CA GLOW PLUGS FUNCTIONAL TEST
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010287

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Check that the glow plugs operate correctly | Replace the faulty glow plugs Op. 5520C10 HEATER PLUGS - R+R [→939011002] |
| 2 | Press the START/STOP button and turn off the engine. Disconnect the wiring harness connector from the glow plug control unit See M015 PLUG PREHEATING CONTROL UNIT [→939004326] Measure the voltage between Pin 3 of control unit wiring side connector A and Earth, ensuring it is greater than 11 V. See M015 PLUG PREHEATING CONTROL UNIT [→939004326] Move on to Step 6 | Move on to Step 3 |
| 3 | In the engine bay junction unti, remove fuse F11 from the block (third from the right in the lower row). See B001 JUNCTION UNIT [→939003748] Measure the voltage between the fuse input contact and earth, checking it is less than 11 V | Repair or if necessary replace the electrical wiring between the junction unit in the engine compartment and the glow plug control unit. See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 4 | Restore the connections or, if necessary, replace the junction unit in the engine compartment Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] The test may be considered completed |  |
| 5 | Measure the voltage between Pins 1 and 3 of control unit wiring side connector A and Earth, ensuring it is greater than 11 V. See M015 PLUG PREHEATING CONTROL UNIT [→939004326] | Restore the earth connection of the glow plug control unit or if necessary replace the electrical wiring See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 6 | Press the START/STOP button. Measure the voltage between Pin 1 of control unit wiring side connector A and Earth, ensuring it is greater than 11 V. See M015 PLUG PREHEATING CONTROL UNIT [→939004326] | Repair or if necessary replace the electrical wiring between the junction unit in the engine compartment and the glow plug control unit. See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 7 | Select the following control unit at the diagnostic equipment: EDC16C39 Diesel electronic injection control unit. Carry out the active diagnosis for the preheating relay, checking that the result is positive. Move on to Step 10 | Move on to Step 9 |
| 8 | If faults are present, repair or if necessary replace the electrical wiring between the glow plug preheating and the engine control unit. See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] The test can be considered over | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |
| 9 | Connect a shunt cable with fuse between pin 1 of control unit connector A and earth. See M015 PLUG PREHEATING CONTROL UNIT [→939004326] Carry out active diagnosis of the preheating relay to check whether it is successful or not | Move on to Step 8 |
| 10 | Press the START/STOP button. Disconnect the shunt connection. Disconnect the wiring harness connector from engine control unit connector A See M010 ENGINE MANAGEMENT ECU [→939004314] Press the START/STOP button. Measure the voltage between Pin 2 of control unit wiring side connector A and Earth, ensuring it is less than 0.3 V. See M015 PLUG PREHEATING CONTROL UNIT [→939004326] | Repair or if necessary replace the electrical wiring between the engine compartment control unit and the glow plug control unit. See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 11 | Press the START/STOP button. Measure the resistance between Pin 2 of control unit wiring side connector A and Earth, ensuring it is greater than 500 V. See M015 PLUG PREHEATING CONTROL UNIT [→939004326] | Repair or if necessary replace the electrical wiring between the engine compartment control unit and the glow plug control unit. See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 12 | Measure the resistance between Pin 2 of control unit connector A and Pin 93 of control unit connector A to ensure it is less than 5 Ohms See M015 PLUG PREHEATING CONTROL UNIT [→939004326] See M010 ENGINE MANAGEMENT ECU [→939004314] | Repair or if necessary replace the electrical wiring between the engine compartment control unit and the glow plug control unit. See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 13 | Disconnect the wiring harness connector from the first two glow plugs A and B. See A040 HEATER PLUGS [→939003741] Turn the ignition key ON. Measure the voltage between Pins 1 and 2 of the control unit and Earth, ensuring it is less than 0.3 V. See M015 PLUG PREHEATING CONTROL UNIT [→939004326] | Repair or if necessary replace the electrical wiring between the glow plug control unt and the glow plugs See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 14 | Press the START/STOP button. Measure the resistance between Pins 1 and 2 of the control unit and glow plugs A and B, ensuring it is less than 5 Ohms. See M015 PLUG PREHEATING CONTROL UNIT [→939004326] See A040 HEATER PLUGS [→939003741] | Repair or if necessary replace the electrical wiring between the glow plug control unt and the glow plugs See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 16 | Replace the glow plug control unti and ensure the fault disappears. Op. 5520C20 HEATER PLUGS CONTROL UNIT - R.R [→939011001] The test can be considered over | Move on to Step 16 |
| 16 | Repair the original glow plug control unit. Disconnect the wiring harness connector from the other two glow plugs C and D. See A040 HEATER PLUGS [→939003741] Press the START/STOP button. Measure the voltage between Pins 3 and 4 of the control unit and Earth, ensuring it is less than 0.3 V. See M015 PLUG PREHEATING CONTROL UNIT [→939004326] | Repair or if necessary replace the electrical wiring between the glow plug control unt and the glow plugs See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 17 | Turn the ignition key OFF. Measure the resistance between Pins 3 and 4 of the control unit and glow plugs C and D, ensuring it is less than 5 Ohms. See M015 PLUG PREHEATING CONTROL UNIT [→939004326] See A040 HEATER PLUGS [→939003741] | Repair or if necessary replace the electrical wiring between the glow plug control unt and the glow plugs See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] |
| 18 | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |  |

## 5530 CURRENT GENERATION  [939010288]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5530 CURRENT GENERATION
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010288
- Subtopics: 5530A ALTERNATOR AND COMPONENTS [939004861]; 5530B BATTERY AND LEADS [939010292]

## 5530A ALTERNATOR AND COMPONENTS  [939004861]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5530 CURRENT GENERATION > 5530A ALTERNATOR AND COMPONENTS
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939004861
- Subtopics: 5530AA CHECK ALTERNATOR TERMINAL "D+" [939004862]; 5530AB Check alternator operation [939004863]

## 5530AA CHECK ALTERNATOR TERMINAL "D+"  [939004862]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5530 CURRENT GENERATION > 5530A ALTERNATOR AND COMPONENTS > 5530AA CHECK ALTERNATOR TERMINAL "D+"
- Kind: test / check procedure
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939004862

- Connect the Examiner in Voltmeter mode with the positive terminal to terminal D+ of the alternator and the negative earthed
- With the ignition on, ensure that the measured voltage is less than 5.5 Volt and that the generator warning light on the panel is on
- If the voltage is interrupted, the alternator is inefficient and should be replaced
- Start the engine and check, with voltage D+ greater than 5.5 Volt, that the generator warning light on the panel goes off and a correct battery recharging indication is displayed.

## 5530AB Check alternator operation  [939004863]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5530 CURRENT GENERATION > 5530A ALTERNATOR AND COMPONENTS > 5530AB Check alternator operation
- Kind: test / check procedure
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939004863

- Connect the Examiner in Voltmeter mode with the positive terminal to terminal D+ of the alternator and the negative earthed
- Activate all the lights, heated rear screen and all vehicle electrical loads
- Start the engine and adjust to 2000 rpm
- Check that the voltage measured at terminal D+ is at least 13 Volt
- If the voltage is below 5 Volt, the alternator is inefficient and should be replaced

## 5530B BATTERY AND LEADS  [939010292]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5530 CURRENT GENERATION > 5530B BATTERY AND LEADS
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010292
- Subtopics: 5530BB BATTERY VOLTAGE CHECK [939010293]; 5530BC BATTERY CHARGE CHECK [939010294]; 5530BB BATTERY VOLTAGE CHECK [939005370]

## 5530BB BATTERY VOLTAGE CHECK  [939010293]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5530 CURRENT GENERATION > 5530B BATTERY AND LEADS > 5530BB BATTERY VOLTAGE CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010293

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Turn the ignition key ON. With the engine switched off and all the consumers switched off, the battery voltage should be between 11 and 13.5 V. | Move on to Step 4 |
| 2 | Turn the ignition key to the STARTING position and check that the battery voltage is more than 8 V | Move on to Step 4 |
| 3 | With the engine idling and warmed up, with all the consumers switched off, the battery voltage should be between 12 and 15 V. The test is considered over | Move on to Step 4 |
| 4 | Start the engine and let it reach a speed of 3000 rpm. Measure the voltage between the positive battery pole and the earth, checking that it is between 13 and 14.8 V See A001 BATTERY [→939004879] | Replace the alternator. Op. 5530A10 ALTERNATOR - R+R [→939011014] |
| 5 | Position the ignition key on STOP. Measure the voltage between the battery positive terminal and Earth, checking it is greater than 11 V. See A001 BATTERY [→939004879] | Carry out See Test 5530BC BATTERY CHARGE CHECK [→939010294 5530BC BATTERY CHARGE CHECK] |
| 6 | Turn the ignition ON and switch off all the consumers. Turn the ignition key OFF. Disconnect the wiring harness connector A from the engine control unit See M010 ENGINE MANAGEMENT ECU [→939004314] Turn the ignition key ON and earth Pin 72 of control unit wiring connector A several times. See M010 ENGINE MANAGEMENT ECU [→939004314] Connect a (21 W) test lamp and a multimeter in parallel and measure the voltage between pins 1 and 5 of the control unit connector A and earth, checking that it is greater than 11 V. See M010 ENGINE MANAGEMENT ECU [→939004314] Move on to Step 12 | Move on to Step 7 |
| 7 | Turn the ignition key OFF. In the engine compartment junction unit, remove relay T9 from the base unit (in the middle of the lower row) See B001 JUNCTION UNIT [→939003748] Connect a shunt cable with a fuse to Pins 30 and 87 of the base unit. Connect a (21 W) test lamp and a multimeter in parallel and measure the voltage between pins 1 and 5 of the control unit connector A and earth, checking that it is greater than 11 V. See M010 ENGINE MANAGEMENT ECU [→939004314] Move on to Step 18 | Move on to Step 8 |
| 8 | Connect a (21 W) test lamp and a multimeter in parallel and measure the voltage between pins 30 and 86 of the base unit and earth, checking that it is greater than 11 V. Move on to Step 18 | Move on to Step 9 |
| 9 | In the engine bay junction unit, remove fuse F17 from the base block (fourth from the right in the lower row). See B001 JUNCTION UNIT [→939003748] Connect a (21 W) test lamp and a multimeter in parallel and measure the voltage between the fuse input contact and earth, checking that it is greater than 11 V. Move on to Step 11 | Move on to Step 10 |
| 10 | If faults are present, repair or if necessary replace the electrical wiring between the engine compartment junction unit and the battery See E1010 POWER SUPPLY [→939011442] The test can be considered over | Replace the junction unit Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] |
| 11 | Replace the engine compartment junction unit Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] The test can be considered over |  |
| 12 | Connect a (21 W) test lamp and a multimeter in parallel and measure the voltage between pins 28 of the control unit connector A and earth, checking that it is less than 11 V. See M010 ENGINE MANAGEMENT ECU [→939004314] | Replace the engine management control unit Op. 1060G80 DIESEL ELECTRONIC INJECTION CONTROL UNIT - .R [→939010573] |
| 13 | Turn the ignition key OFF. In the engine bay junction unit, remove fuse F16 from the base block (third from the right in the lower row). See B001 JUNCTION UNIT [→939003748] Turn the ignition key ON. Connect a (21 W) test bulb and a multimeter in parallel and measure the voltage between the fuse input contact and earth, checking that it is less than 11 V. Move on to Step 15 | Move on to Step 14 |
| 14 | If faults are present, repair or, if necessary, replace the electrical wiring between the engine compartment junction unit and the engine control unit. See E5050 DIESEL ENGINES ELECTRONIC MANAGEMENT [→939003133] The test can be considered over | Replace the junction unit Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] |
| 15 | Turn the ignition key OFF. In the engine bay junction unit, remove relay T10 from the base unit (it is the second from left in the bottom row). See B001 JUNCTION UNIT [→939003748] Connect a (21 W) test lamp and a multimeter in parallel and measure the voltage between pins 30 of the base unit and earth, checking that it is greater than 11 V. | Move on to Step 10 |
| 16 | Reinsert fuse F16 in the engine compartment junction unit base See B001 JUNCTION UNIT [→939003748] Connect a bridge with a fuse to Pins 30 and 87 of the base unit of relay T10. Connect a (21 W) test lamp and a multimeter in parallel and measure the voltage between pins 11 of the junction unit and earth, checking that it is greater than 11 V. See B001 JUNCTION UNIT [→939003748] | Replace the engine compartment junction unit Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] |
| 17 | Replace relay T10 Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] The test may be considered completed |  |
| 18 | Measure the resistance between Pin 85 of the base unit and Earth, ensuring it is greater than 500 kOhm | Move on to Step 10 |
| 19 | Measure the resistance between Pin 85 of the base unit and Pin 72 of control unit connector A to ensure it is less than 5 Ohms See M010 ENGINE MANAGEMENT ECU [→939004314] Move on to Step 11 | Move on to Step 14 |

## 5530BC BATTERY CHARGE CHECK  [939010294]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5530 CURRENT GENERATION > 5530B BATTERY AND LEADS > 5530BC BATTERY CHARGE CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010294

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Remove the battery cover. Check visually to ensure the battery terminals are not oxidised | Clean the layer of oxidation from the terminals |
| 2 | The water gauge (magic eye) should not be white indicating that the electrolyte level is too low. | Replace the battery Op. 5530B10 BATTERY - R+R [→939011011] |
| 3 | The plugs or caps should not be damaged or incorrectly positioned | Replace the battery Op. 5530B10 BATTERY - R+R [→939011011] |
| 4 | There should be no damage to the main body of the battery, the cover or the terminals | Replace the battery Op. 5530B10 BATTERY - R+R [→939011011] |
| 5 | There should be no signs of electrolyte escaping from the battery (wet areas or large salt deposits) | Clean the area involved and top up to the correct level |
| 6 | Check that the vehicle has not been used for at least 30 minutes. Disconnect the negative terminal and check the battery charge using the MICRO 360 equipment, tool code 1806367006, making sure that it is connected directly to the battery terminals. The equipment will give one of the following signals "CHARGE RETEST" or "BATT. OK+RECHARGE" or the display will remain off. Move on to Step 11 | Move on to Step 7 |
| 7 | The equipment will give one of the following signals "REPLACE BATT." or "CELL SHORT". Go on to Step 10 | Move on to Step 8 |
| 8 | Check the electrical connections for the supply circuit are correct with particular reference to the power supplies and earths See E1010 POWER SUPPLY [→939011442] | Restore the correct connections See E1010 POWER SUPPLY [→939011442] |
| 9 | Reconnect or refit the battery on the vehicle and try and start the engine several times (at least 6 or 7) with about 4-5 seconds between each attempt. Make sure that the engine starts successfully each time. The test can be considered over | Continue with Step 8 See Test 5530BB BATTERY VOLTAGE CHECK [→939005370 5530BB BATTERY VOLTAGE CHECK] |
| 10 | Replace the battery Op. 5530B10 BATTERY - R+R [→939011011] The test can be considered over |  |
| 11 | Rechare the battery using tool 1806151001 |  |
| 12 | Check the battery charge using the MICRO 360 equipment, tool code 1806367006, making sure that it is connected directly to the battery terminals. The equipment will give one of the following signals "RETEST CHARGE." or "REPLACE BATT." or "CELL SHORT" or the display will remain off Move on to Step 9 | Move on to Step 10 |

## 5530BB BATTERY VOLTAGE CHECK  [939005370]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5530 CURRENT GENERATION > 5530B BATTERY AND LEADS > 5530BB BATTERY VOLTAGE CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005370

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Turn the ignition key ON. With the engine switched off and all the consumers switched off, the battery voltage should be between 11 and 13.5 V. | Move on to Step 4 |
| 2 | Turn the ignition key to the STARTING position and check that the battery voltage is more than 8 V | Move on to Step 4 |
| 3 | With the engine idling and warmed up, with all the consumers switched off, the battery voltage should be between 12 and 15 V. | The test may be considered over. Continue to Step 4 |
| 4 | Start the engine and let the engine speed reach 3000 rpm. Measure the voltage between the positive battery pole See A001 BATTERY [→939004879] and the earth, checking that it is in a range between 13 and 14.8 V | Replace the alternator. Op. 5530A10 ALTERNATOR - R+R [→939011014] |
| 5 | Turn the ignition key OFF. Measure the voltage between the positive battery pole See A001 BATTERY [→939004879] and the earth, checking it is greater than 11 V | Carry out the See Test 5530BC BATTERY CHARGE CHECK [→939010294 5530BC BATTERY CHARGE CHECK] |
| 6 | Turn the ignition ON and switch off all the consumers. Turn the ignition key OFF. Disconnect the wiring harness connector A from the engine control unit See M010 ENGINE MANAGEMENT ECU [→939004314] Turn the ignition key ON and earth Pin 25 of control unit wiring connector A several times. See M010 ENGINE MANAGEMENT ECU [→939004314] Connect a test bulb (21 W) and a multimeter in parallel and measure the voltage between pin 92 (wiring side) of control unit connector A. See M010 ENGINE MANAGEMENT ECU [→939004314] and Earth, checking it is greater than 11 V Move on to Step 12 | Move on to Step 7 |
| 7 | Turn the ignition key OFF. In the engine compartment junction unit See B001 JUNCTION UNIT [→939003748] , remove relay T9 from the base (centre of the bottom row). Connect a shunt cable with a fuse to Pins 30 and 87 of the base unit. Connect a test bulb (21 W) and a multimeter in parallel and measure the voltage between pin 92 of control unit connector A. See M010 ENGINE MANAGEMENT ECU [→939004314] and Earth, checking it is greater than 11 V Move on to Step 18 | Move on to Step 8 |
| 8 | Connect a (21 W) test lamp and a multimeter in parallel and measure the voltage between pins 30 and 86 of the base unit and earth, checking that it is greater than 11 V. Move on to Step 18 | Move on to Step 9 |
| 9 | In the engine compartment junction unit See B001 JUNCTION UNIT [→939003748] , remove fuse F18 from the base unit (it is the second from the left in the bottom row). Connect a (21 W) test lamp and a multimeter in parallel and measure the voltage between the fuse input contact and earth, checking that it is greater than 11 V. Move on to Step 11 | Move on to Step 10 |
| 10 | If faults are present, repair or if necessary replace the electrical wiring between the engine compartment junction unit and the battery See E1010 POWER SUPPLY [→939011442] The test can be considered over | Replace the junction unit Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] |
| 11 | Replace the engine compartment junction unit Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] | The test can be considered over |
| 12 | Connect a test lamp (21 W) and a multimeter in parallel and measure the voltage between pin 8 of control unit connector A. See M010 ENGINE MANAGEMENT ECU [→939004314] and Earth, checking it is less than 11 V | Replace the engine management control unit Op. 1056F82 CONTROL UNIT SINGLE OF INJECTION IGNITION SYSTEM R R [→939010541] |
| 13 | Turn the ignition key OFF. In the engine compartment junction unit See B001 JUNCTION UNIT [→939003748] , remove fuse F21 from the base (third from the left in the lower row). Turn the ignition key to MAR. Connect a (21 W) test bulb and a multimeter in parallel and measure the voltage between the fuse input contact and earth, checking that it is less than 11 V. Continue to Step 15. | Move on to Step 14 |
| 14 | If faults are present, repair or, if necessary, replace the electrical wiring between the engine management control unit and the engine compartment junction unit. See E5030 PETROL ENGINES ELECTRONIC MANAGEMENT [→939004361] The test can be considered over | Replace the junction unit Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] |
| 15 | Turn the ignition key OFF. In the engine compartment junction unit See B001 JUNCTION UNIT [→939003748] , remove relay T10 from the base unit (it is the second from the left in the bottom row). Connect a (21 W) test lamp and a multimeter in parallel and measure the voltage between pins 30 of the base unit and earth, checking that it is greater than 11 V. | Move on to Step 10 |
| 16 | Reinsert fuse F21 in the engine compartment junction unit base See B001 JUNCTION UNIT [→939003748] Connect a bridge with a fuse to Pins 30 and 87 of the base unit of relay T10. Connect a test bulb (21 W) and a multimeter in parallel and measure the voltage between pin 11 of the junction unit See B001 JUNCTION UNIT [→939003748] and Earth, checking it is greater than 11 V | Replace the engine compartment junction unit Op. 5505A13 ADDITIONAL JUNCTION UNIT IN ENGINE COMPARTMENT - R.R. [→939010962] |
| 17 | Replace relay T10 | The test may be considered completed |
| 18 | Measure the resistance between Pin 85 of the base unit and Earth, ensuring it is greater than 500 kOhm | Move on to Step 10 |
| 19 | Measure the resistance between pin 85 of the base and pin 72 of control unit connector A See M010 ENGINE MANAGEMENT ECU [→939004314] , checking that it is less than 5 Ohm. Move on to Step 11 | Move on to Step 14 |

## 5540 EXTERIOR LIGHTING  [939005428]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5540 EXTERIOR LIGHTING
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005428
- Subtopics: 5540B HEADLAMPS [939005429]; 5540C HEADLAMP/LIGHT CLUSTER ALIGNMENT CORRECTION DEVICES [939005438]

## 5540B HEADLAMPS  [939005429]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5540 EXTERIOR LIGHTING > 5540B HEADLAMPS
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005429
- Subtopics: 5540BA DIPPED BEAM CIRCUIT CHECK [939005430]; 5540BJ CHECK IGNITION-OPERATED HEADLAMP POWER SUPPLY [939005431]; 5540BK CHECK THE CONTINUITY OF THE LOW BEAM WIRING INSIDE THE HEADLAMP [939005432]; 5540BL BIDIRECTIONAL SERIAL LINE CHECK [939005433]; 5540BM CHECK THE HEADLAMP ALIGNMENT MOTOR SUPPLY WIRING [939005434]; 5540BN SPEED SIGNAL CHECK [939005435]; 5540BO CHECK THE SPEED SIGNAL WIRING CONTINUITY INSIDE THE MASTER HEADLAMP [939005436]; 5540BP CHECK THE HEADLAMP HIGH BEAM FUNCTION CONTROL COIL SUPPLY WIRING [939005437]

## 5540BA DIPPED BEAM CIRCUIT CHECK  [939005430]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5540 EXTERIOR LIGHTING > 5540B HEADLAMPS > 5540BA DIPPED BEAM CIRCUIT CHECK
- Kind: test / check procedure
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005430

| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | With the ignition **ON** and the steering wheel stalk set to low beam, ensure the presence at **Pin 1** of the 14-way headlamp connector (Master See F010 LEFT HEADLAMP [→939003988] and Slave) See F011 RIGHT HEADLAMP [→939003992] of a voltage of +12 Volt. Move on to Step 3 | Move on to Step 2 |
| 2 | Check that the connector is correctly inserted in the other part. Try to move it from its seat by making small movements in all directions, grasping the connector body in your fingers and the wiring in your hand. The connector must stay in place. Exercise a moderate pulling force. The connector must stay in place. Check whether the power supply goes off, on and/or viceversa (touching/not touching). Pull the lead and check the stability in the groove (should not move back): exercise repeated pull-push-pull cycles on the lead and ensure its immobility. Use a lens to examine the terminal crimping area. The barrels must be turned symmetrically and three-stranded sections should not emerge from the crimping area. The area of bare wire beneath the barrel must protrude by approximately 0.5 mm The test can be considered over | Restore the continuity of the wiring between the under-dashboard junction unit and the faulty headlamp See E2011 DIPPED HEADLAMPS [→939002923] |
| 3 | Disconnect the headlamp 14-way connector (Master See F010 LEFT HEADLAMP [→939003988] and Slave) See F011 RIGHT HEADLAMP [→939003992] Connect using an ohmmeter between **Pin 14** (wiring side) of the headlamp and an **Earth** and check that the resistance is less than **1 Ohm** | Restore the correct earth connection See E2011 DIPPED HEADLAMPS [→939002923] |
| 4 | Connect using an ohmmeter between **Pin 13** (wiring side) of the headlamp and an **Earth** and check that the resistance is less than **1 Ohm** | Restore the correct earth connection See E2011 DIPPED HEADLAMPS [→939002923] |
| 5 | Switch the headlamp stalk to low beam. heck for the presence of an earth signal at **Pin 2** of **connector I** of the Body computer See M001 BODY COMPUTER [→939004296] | Restore the stalk unit earth connection See E2011 DIPPED HEADLAMPS [→939002923] |
| 6 | heck for the presence of an earth signal at **Pin 28** of **connector G** of the Body computer See M001 BODY COMPUTER [→939004296] | Restore the wiring between the stalk unit and Body Computer See E2011 DIPPED HEADLAMPS [→939002923] |
| 7 | Check that the stalk contacts are not loose | Replace the steering column switch unit. Op. 5550A10 STALK UNIT ASSEMBLY - R+R [→939011059] |
| 8 | Switch the stalk to low beams and check the under-dashboard junction unit to ensure that an earth signal is present at **Pin 86** of relay **T1** (bottom right in the fuse unit) | Replace the Body Computer Op. 5505A32 BODY COMPUTER - R.R [→939010966] |
| 9 | In the under-dashboard junction unit, check that relay **T1** (lower right in the fuse unit) is operating correctly and that the relay contacts are not defective | Replace relay **T1** |
| 10 | In the under-dashboard junction unit, ensure that fuses **F12** (second from the top in the right-hand row) and **F13** (first from the top in the right-hand row) are continuous and correctly inserted. | Insert the fuses correctly. Replace them if necessary after identifying the reason why they blew |

## 5540BJ CHECK IGNITION-OPERATED HEADLAMP POWER SUPPLY  [939005431]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5540 EXTERIOR LIGHTING > 5540B HEADLAMPS > 5540BJ CHECK IGNITION-OPERATED HEADLAMP POWER SUPPLY
- Kind: test / check procedure
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005431

| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | With the ignition **ON** check for the presence at Pin 9 of the Master headlamp 14-way connector See F010 LEFT HEADLAMP [→939003988] and Slave headlamp See F011 RIGHT HEADLAMP [→939003992] of a voltage of **+12 V**. The test can be considered over | Move on to Step 2 |
| 2 | Check the under-dashboard junction unit to ensure that fuse **F37** (in the centre of the second row from the top) has not blown | Replace fuse **F37** in the under-dashboard junction unit after identifying the reason why it blew |
| 3 | Restore wiring continuity between the Body Computer and headlamp See E2011 DIPPED HEADLAMPS [→939002923] |  |

## 5540BK CHECK THE CONTINUITY OF THE LOW BEAM WIRING INSIDE THE HEADLAMP  [939005432]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5540 EXTERIOR LIGHTING > 5540B HEADLAMPS > 5540BK CHECK THE CONTINUITY OF THE LOW BEAM WIRING INSIDE THE HEADLAMP
- Kind: test / check procedure
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005432

| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Disconnect the negative battery cable. Remove the Master Op. 5540B81 LEFT GAS DISCHARGE LIGHT CLUSTER - R.R. [→939004921] / Slave headlamp Op. 5540B82 RIGHT GAS DISCHARGE LIGHT CLUSTER - R.R. [→939004922] Disconnect the control unit from the headlamp Connect the diagnostic tester in ohmmeter mode and check the continuity between **Pin 1** of the 14-way connector and **Pin 5** of the 21-way connector for connection to the ballast control unit | Replace the headlamp |

## 5540BL BIDIRECTIONAL SERIAL LINE CHECK  [939005433]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5540 EXTERIOR LIGHTING > 5540B HEADLAMPS > 5540BL BIDIRECTIONAL SERIAL LINE CHECK
- Kind: test / check procedure
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005433

| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Disconnect the wiring of the master headlamp 14-way connector. Disconnect the wiring of the slave headlamp 14-way connector. Connect the diagnostic tester in ohmmeter mode and check the continuity between **Pin 12** of the headlamp vehicle side wiring 14-way connector See F010 LEFT HEADLAMP [→939003988] and **Pin 12** of the headlamp vehicle wiring 14-way connector See F011 RIGHT HEADLAMP [→939003992] | Restore wiring continuity See E2011 DIPPED HEADLAMPS [→939002923] |
| 2 | With the headlamp 14-way connectors disconnected, check the insulation to earth by connecting across **Pin 12** Pin 12 of each of the connectors and **Earth** | Restore insulation See E2011 DIPPED HEADLAMPS [→939002923] |
| 3 | Check the continuity across Pin 12 of the headlamp 14 way connector See F010 LEFT HEADLAMP [→939003988] and Pin 14 of the 21-way connector for connection to the Ballast control unit | Replace the Master headlamp Op. 5540B81 LEFT GAS DISCHARGE LIGHT CLUSTER - R.R. [→939004921] |
| 4 | Check the continuity across **Pin 12** of the headlamp 14 way connector See F011 RIGHT HEADLAMP [→939003992] and Pin 14 of the 21-way connector for connection to the Ballast control unit | Replace the slave headlamp Op. 5540B82 RIGHT GAS DISCHARGE LIGHT CLUSTER - R.R. [→939004922] |

## 5540BM CHECK THE HEADLAMP ALIGNMENT MOTOR SUPPLY WIRING  [939005434]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5540 EXTERIOR LIGHTING > 5540B HEADLAMPS > 5540BM CHECK THE HEADLAMP ALIGNMENT MOTOR SUPPLY WIRING
- Kind: test / check procedure
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005434

| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Remove the left Op. 5540B81 LEFT GAS DISCHARGE LIGHT CLUSTER - R.R. [→939004921] or right headlamp Op. 5540B82 RIGHT GAS DISCHARGE LIGHT CLUSTER - R.R. [→939004922] Check the headlamp adjustment motor four-way supply connection is correctly inserted | Connect the electrical connection See E2011 DIPPED HEADLAMPS [→939002923] |
| 2 | Check that the motor operates correctly | Replace the headlamp |

## 5540BN SPEED SIGNAL CHECK  [939005435]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5540 EXTERIOR LIGHTING > 5540B HEADLAMPS > 5540BN SPEED SIGNAL CHECK
- Kind: test / check procedure
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005435

| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Turn on the diagnostic tester and go to Instruments. In Voltmeter mode, select a full scale deflection value **20 V** and a time base of **2 s**. Connect the voltmeter red probe to **Pin 10** of the master headlamp 14-way connector See F010 LEFT HEADLAMP [→939003988] and the black probe to **Earth**. Turn one wheel by hand and when the speed is **4-6 km/h** press the START button. Check that the signal acquired looks the attached graph without any dips. The test can be considered over | Move on to Step 2 |
| 2 | Check for wiring continuity between Pin 28 of Body Computer connector B See M001 BODY COMPUTER [→939004296] , and Pin 10 of the Master headlamp 14-way connector See F010 LEFT HEADLAMP [→939003988] | The test can be considered over |
| 3 | Check for wheel speed signal errors in the ABS control unit | Continue as instructed by the diagnostic equipment |
| 4 | Check for wiring continuity between the ABS control unit and the Body Computer See E7020 ABS [→939011830] | Replace Body Computer Op. 5505A32 BODY COMPUTER - R.R [→939010966] |
| 5 | Check that the fault is no longer present | Replace the Master headlamp Op. 5540B81 LEFT GAS DISCHARGE LIGHT CLUSTER - R.R. [→939004921] |

> Block applies to: all engines; all production periods; only with equipment: VDC
| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Turn on the diagnostic tester and go to Instruments. In Voltmeter mode, select a full scale deflection value **20 V** and a time base of **2 s**. Connect the voltmeter red probe to **Pin 10** of the master headlamp 14-way connector See F010 LEFT HEADLAMP [→939003988] and the black probe to **Earth**. Turn one wheel by hand and when the speed is **4-6 km/h** press the START button. Check that the signal acquired looks the attached graph without any dips. The test can be considered over | Move on to Step 2 |
| 2 | Check for wiring continuity between Pin 28 of Body Computer connector B See M001 BODY COMPUTER [→939004296] , and Pin 10 of the Master headlamp 14-way connector See F010 LEFT HEADLAMP [→939003988] | The test can be considered over |
| 3 | Check for wheel speed signal errors in the ABS control unit | Continue as instructed by the diagnostic equipment |
| 4 | Check for wiring continuity between the ABS control unit and the Body Computer See E7022 VDC [→939011835] | Replace Body Computer Op. 5505A32 BODY COMPUTER - R.R [→939010966] |
| 5 | Check that the fault is no longer present | Replace the Master headlamp Op. 5540B81 LEFT GAS DISCHARGE LIGHT CLUSTER - R.R. [→939004921] |

## 5540BO CHECK THE SPEED SIGNAL WIRING CONTINUITY INSIDE THE MASTER HEADLAMP  [939005436]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5540 EXTERIOR LIGHTING > 5540B HEADLAMPS > 5540BO CHECK THE SPEED SIGNAL WIRING CONTINUITY INSIDE THE MASTER HEADLAMP
- Kind: test / check procedure
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005436

| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Remove the headlamp Op. 5540B81 LEFT GAS DISCHARGE LIGHT CLUSTER - R.R. [→939004921] Disconnect the control unit from the headlamp Op. 5540B43 CONTROL UNIT OF ONE RIGHT GAS DISCHARGE LIGHT CLUSTER ONE LH OR RH RR WITH LIGHT CLUSTER REMOVED [→939004919] Connect the diagnostic tester in ohmmeter mode and check the continuity between **Pin 10** of the headlamp 14-way connector See F010 LEFT HEADLAMP [→939003988] and pin 15 of the control unit connector | Replace the headlamp |
| 2 | Replace the Ballast control unit **Op. 5540B42** |  |

## 5540BP CHECK THE HEADLAMP HIGH BEAM FUNCTION CONTROL COIL SUPPLY WIRING  [939005437]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5540 EXTERIOR LIGHTING > 5540B HEADLAMPS > 5540BP CHECK THE HEADLAMP HIGH BEAM FUNCTION CONTROL COIL SUPPLY WIRING
- Kind: test / check procedure
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005437

| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Remove the headlamp Remove the headlamp bulb Op. 5540B45 GAS DISCHARGE DIPPED/MAIN BEAM HEADLAMP BULB - R.R. [→939004920] Check that the 3-way connection (with two wires) supplying the headlamp high beam control coil is correctly inserted | Connect the electrical connection See E2012 MAIN BEAM HEADLAMPS [→939002933] |
| 2 | Check the headlamp high beam function is operating correctly. The test can be considered over | Replace the left headlamp Op. 5540B81 LEFT GAS DISCHARGE LIGHT CLUSTER - R.R. [→939004921] or right headlamp Op. 5540B82 RIGHT GAS DISCHARGE LIGHT CLUSTER - R.R. [→939004922] (the faulty unit) and move on to Step 3 |
| 3 | Check the headlamp high beam function is operating correctly. | Refit the headlamp replaced previously and replace the control unit **Op. 5540B42** |

## 5540C HEADLAMP/LIGHT CLUSTER ALIGNMENT CORRECTION DEVICES  [939005438]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5540 EXTERIOR LIGHTING > 5540C HEADLAMP/LIGHT CLUSTER ALIGNMENT CORRECTION DEVICES
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005438
- Subtopics: 5540CA HEADLAMP ALIGNMENT SENSOR CHECK [939005439]

## 5540CA HEADLAMP ALIGNMENT SENSOR CHECK  [939005439]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5540 EXTERIOR LIGHTING > 5540C HEADLAMP/LIGHT CLUSTER ALIGNMENT CORRECTION DEVICES > 5540CA HEADLAMP ALIGNMENT SENSOR CHECK
- Kind: test / check procedure
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005439

| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | With the ignition ON, check for the presence at **Pin 5** of the headlamp alignment corrector front potentiometer connector See K001 HEADLAMP ALIGNMENT CORRECTOR FRONT POTENTIOMETER (CAF) [→939004147] of a voltage of **5 V**. Move on to Step 5 | Move on to Step 2 |
| 2 | If faults are present, restore the continuity of the wiring between the Master headlamp (left side) and the front potentiometer See E3080 HEADLAMP AGLINMENT CORRECTOR [→939003043] The test can be considered over | Move on to Step 3 |
| 3 | With the key ON, check for the presence at **Pin 1** of the Master headlamp See F010 LEFT HEADLAMP [→939003988] of a voltage of **5 V**. | Replace the master headlamp Op. 5540B81 LEFT GAS DISCHARGE LIGHT CLUSTER - R.R. [→939004921] |
| 4 | Check the fault disappears. The test can be considered over | Replace the headlamp control unit **Op. 5540B42** |
| 5 | With the ignition ON, check for the presence at **Pin 5** of the headlamp alignment corrector rear potentiometer connector See K002 HEADLAMP ALIGNMENT CORRECTOR REAR POTENTIOMETER (CAF) [→939004149] of a voltage of **5 V**. Move on to Step 8 | Move on to Step 6 |
| 6 | If faults are present, restore the continuity of the wiring between the Master headlamp (left side) and the rear potentiometer See E3080 HEADLAMP AGLINMENT CORRECTOR [→939003043] The test can be considered over | Move on to Step 7 |
| 7 | With the key ON, check for the presence at **Pin 4** of the headlamp See F010 LEFT HEADLAMP [→939003988] of a voltage of **5 V**. Move on to Step 4 | Replace the master headlamp Op. 5540B81 LEFT GAS DISCHARGE LIGHT CLUSTER - R.R. [→939004921] |
| 8 | Check **Pin 1** of the potentiometer connector See K001 HEADLAMP ALIGNMENT CORRECTOR FRONT POTENTIOMETER (CAF) [→939004147] for the presence of a negative signal. Move on to Step 11 | Move on to Step 9 |
| 9 | If faults are present, restore the continuity of the wiring between the Master headlamp (left side) and the front potentiometer See E3080 HEADLAMP AGLINMENT CORRECTOR [→939003043] The test can be considered over | Move on to Step 10 |
| 10 | With the key ON, check for the presence at **Pin 4** of the headlamp See F010 LEFT HEADLAMP [→939003988] of an earth signal. Move on to Step 4 | Replace the master headlamp Op. 5540B81 LEFT GAS DISCHARGE LIGHT CLUSTER - R.R. [→939004921] |
| 11 | Check **Pin 1** of the potentiometer connector See K002 HEADLAMP ALIGNMENT CORRECTOR REAR POTENTIOMETER (CAF) [→939004149] for the presence of a negative signal. Move on to Step 14 | Move on to Step 12 |
| 12 | If faults are present, restore the continuity of the wiring between the Master headlamp (left side) and the rear potentiometer See E3080 HEADLAMP AGLINMENT CORRECTOR [→939003043] The test can be considered over | Move on to Step 13 |
| 13 | With the key ON, check for the presence at **Pin 6** of the headlamp See F010 LEFT HEADLAMP [→939003988] of an earth signal. Move on to Step 4 | Replace the master headlamp Op. 5540B81 LEFT GAS DISCHARGE LIGHT CLUSTER - R.R. [→939004921] |
| 14 | Turn the ignition key **ON**. Disconnect the front sensor connecting rod. Connect a Voltmeter across **Pin 2** of the headlamp 6-way connector See F010 LEFT HEADLAMP [→939003988] and **Earth**. Check that the voltage varies from **0.5** and **4.5 V** when the sensor mobile axis is turned by hand. Move on to Step 16 | Move on to Step 15 |
| 15 | If faults are present, restore the continuity of the wiring between the Master headlamp (left side) and the front potentiometer See E3080 HEADLAMP AGLINMENT CORRECTOR [→939003043] The test can be considered over | Replace the sensor Op. 5540C42 SENSOR FOR CORRECTING/ALIGNING GAS DISCHARGE LIGHTING UNITS ON FRONT SUSPENSION - R R [→939004923] |
| 16 | Turn the ignition key **ON**. Disconnect the rear sensor connecting rod. Connect a Voltmeter across **Pin 5** of the headlamp 6-way connector See F010 LEFT HEADLAMP [→939003988] and **Earth**. Check that the voltage varies from **0.5** and **4.5 V** when the sensor mobile axis is turned by hand. The test can be considered over | Move on to Step 17 |
| 17 | If faults are present, restore the continuity of the wiring between the Master headlamp (left side) and the rear potentiometer See E3080 HEADLAMP AGLINMENT CORRECTOR [→939003043] | Replace the sensor Op. 5540C46 SENSOR FOR CORRECTING/ALIGNING GAS DISCHARGE LIGHTING UNITS ON REAR SUSPENSION - R.R. [→939004925] |

## 5550 WARNING AND MANOEUVRING INDICATORS  [939010295]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5550 WARNING AND MANOEUVRING INDICATORS
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010295
- Subtopics: 5550D BRAKE AND REVERSING LIGHTS [939010296]

## 5550D BRAKE AND REVERSING LIGHTS  [939010296]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5550 WARNING AND MANOEUVRING INDICATORS > 5550D BRAKE AND REVERSING LIGHTS
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010296
- Subtopics: 5550DA BRAKE PEDAL SWITCH OPERATION CHECK [939010297]

## 5550DA BRAKE PEDAL SWITCH OPERATION CHECK  [939010297]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5550 WARNING AND MANOEUVRING INDICATORS > 5550D BRAKE AND REVERSING LIGHTS > 5550DA BRAKE PEDAL SWITCH OPERATION CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010297

The brake switch has four pins.
Connect to pins 1 and 3 using a multimeter and check, by pressing the switch, that the circuits switches from normally closed to normally open.
Connect to pins 2 and 4 using a multimeter and check, by pressing the switch, that the circuits switches from normally open to normally closed.

## 5560 INSTRUMENTS  [939010332]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5560 INSTRUMENTS
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010332
- Subtopics: 5560B ANALOGUE CONTROL PANEL [939010333]

## 5560B ANALOGUE CONTROL PANEL  [939010333]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5560 INSTRUMENTS > 5560B ANALOGUE CONTROL PANEL
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010333
- Subtopics: 5560BW CHECK AUXILIARY INSTRUMENTS [939010334]

## 5560BW CHECK AUXILIARY INSTRUMENTS  [939010334]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5560 INSTRUMENTS > 5560B ANALOGUE CONTROL PANEL > 5560BW CHECK AUXILIARY INSTRUMENTS
- Kind: test / check procedure
- Applies to: engines: 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010334

| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Check the protected power supply from the instrument panel. Connect an Examiner in Voltmeter mode with the positive probe connected to pin 3 and the negative to pin 2 of the 9-way auxiliary instrument connector. With the key on, the voltage reading should be approximately 12 volts. | 1.Restore the +12V power connection. 2. Restore the earth connnection across the instrument panel and auxiliary instruments. If the power supply is not OK, replace the instrument panel. If OK, replace the auxiliary instruments. |
| 2 | Check serial line 1. Disconnect instrument panel connector C and the 9-way auxiliary instrument connector: Check the continuity of the wiring between pin 1 of instrument panel connector C and pin 1 of the auxiliary instrument connector. Check the line earth insulation. | Restore the continuity/insulation of the serial line. If the checks on the power supply and serial line are OK, replace the auxiliary instruments. If there is no serial line signal at the panel output, replace the instrument panel. |
AUXIILARY INSTRUMENT UNIT
The module located in the centre of the dashboard, directed towards the driver at an angle of 20 degrees.
It comprises three panels including:
- fuel level gauge with reserve warning light
- engine coolant temperature gauge with overheating warning light
- engine oil temperature gauge (petrol versions)
- turbo pressure gauge (JTD versions).

## 5570 ACCESSORIES  [939010298]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5570 ACCESSORIES
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010298
- Subtopics: 5570T CAR RADIO AND CAR TELEPHONE [939010299]

## 5570T CAR RADIO AND CAR TELEPHONE  [939010299]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5570 ACCESSORIES > 5570T CAR RADIO AND CAR TELEPHONE
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010299
- Subtopics: 5570 SUBWOOFER OPERATION CHECK [939010300]; 5570TH CHECK OPERATION OF SIGNALS BETWEEN CD-CHANGER AND RADIO [939005371]; 5570TN BLUETOOTH LANGUAGE UPDATE PROCEDURE [939005372]; 5570TO CHECK OPERATION OF VOICE RECOGNITION [939005373]; 5070TP BLUETOOTH SOFTWARE LANGUAGE UPDATE PROCEDURE [939005374]

## 5570 SUBWOOFER OPERATION CHECK  [939010300]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5570 ACCESSORIES > 5570T CAR RADIO AND CAR TELEPHONE > 5570 SUBWOOFER OPERATION CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010300

| STEP | CHECK TO BE CONDUCTED | SOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | **Check power supply (+30)** Check for battery voltage across pin 5 of the subwoofer connector and earth Check that the connector is correctly inserted in its other part Try to move it from its seat by shifting it by small amounts in all directions, grasping the connector case in your fingers and the wiring in your hand. The connector should remain in its housing Exercise moderate pulling force. The connector should remain in its housing Check whether the power supply goes off, on and/or viceversa (touching/not touching) Subject the cable to pulling force and check cable stability (lack of shrinkage): apply repeated pull-push-pull cycles to the cable and check it remains immobile. Crimping examination: Use a lens to examine the crimped area of the terminal. The barrels should be turned symmetrically and three-stranded sections should not emerge from the crimped area. The bare cable section beneath the barrel should emerge by 0.5 | -If blown, replace fuse F61 in the boot compartment control unit after identifying the cause Restore the wiring between the boot compartment control unit and the subwoofer |
| 2 | **Check the earth** Disconnect the 5-way connector and connect an ohmmeter across pin 4 and earth to check the resistance is less than 1 ohm | Restore earth connection |
| 3 | **Check the ignition signal** With the radio on, check for a 12 Volt signal at pin 3 of the subwoofer | Restore the connection across pin 3 of the subwoofer and pin 25 of the audio amplifier |
| 4 | **Check the continuity of the audio signal wiring** Check the continuity of the wiring between pin 2 of the subwoofer and pin 12 of the audio amplifier Check the continuity of the wiring between pin 1 of the subwoofer and pin 11 of the audio amplifier Check the insulation to earth of the wiring described under the previous points | Restore wiring continuity Restore the insulation |

## 5570TH CHECK OPERATION OF SIGNALS BETWEEN CD-CHANGER AND RADIO  [939005371]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5570 ACCESSORIES > 5570T CAR RADIO AND CAR TELEPHONE > 5570TH CHECK OPERATION OF SIGNALS BETWEEN CD-CHANGER AND RADIO
- Kind: test / check procedure
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005371

Foreword:
To carry out this check a music compact disc must be inserted in the tray (with the legible part correctly positioned).
Mastered CDs may be difficult or impossible to play. Test with original or good quality mastered CDs. CDRs can be played, but not MP3 CDs. If there is interference whilst playing CDs, check the screening of the audio connecting cable between the player and the Connect.
**CHECK LEFT AND RIGHT AF OUTPUT SIGNALS FROM CD CHANGER**
After having selected a track on a music Compact Disc, place the black voltmeter probe to pin 18 of the 20-way Connect connector (I) and the red probe alternately at the Connect signal input cables (pin 20 - right AF signal and pin 19 left AF signal).
See E3510 RADIO [→939003053]
Select a 20V end of scale and 5 seconds on the Examiner (Voltmeter mode).
Press the Start button and take the reading: the values obtained should be similar to the ones in the diagram below.
If the signal is similar to the one shown in the diagram, this means that the CD Changer is sending the audio signals correctly. Continue with the check on the radio input signal.
If this does not take place, check that the signal is not similar to the one shown in the diagram below.
[image: https://sloeber94.github.io/elrnDB/media/939003075.jpg]
If the audio signals to the Connect radio are not present, check that the activation signal coming from the radio and the correct power supply are present at the CD Changer connector.
If this is the case, continue checking the continuity and the insulation to earth of the following wiring:
- Connection between pin 13 of the CD Changer connector and pin 13 of the Connect 20-way connector (CDC BUS RxD)
- Connection between pin 14 of the CD Changer connector and pin 14 of the Connect 20-way connector (CDC bus TxD)
- Connection between pin 17 of the CD Changer connector and pin 17 of the Connect 20-way connector (CDC bus Gnd)
**CHECK SERIAL LINE FOR COMMUNICATION WITH CD CHANGER**
After having selected a track on a music Compact Disc, position the black voltmeter probe to earth and the red probe alternately at pin 13 and 14 of the Connect 20-way connector.
See E3510 RADIO [→939003053]
Select a 20V end of scale and 5 seconds on the Examiner (Voltmeter mode).
Press the Start button and take the reading: the values obtained for both measurements should be similar to the ones in the diagram below.
[image: https://sloeber94.github.io/elrnDB/media/939003076.jpg]

## 5570TN BLUETOOTH LANGUAGE UPDATE PROCEDURE  [939005372]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5570 ACCESSORIES > 5570T CAR RADIO AND CAR TELEPHONE > 5570TN BLUETOOTH LANGUAGE UPDATE PROCEDURE
- Kind: test / check procedure
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005372

> Note: Press the ESC button to suspend the update procedure at any time.
[image: https://sloeber94.github.io/elrnDB/media/946000942.jpg]
|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Disconnect the mobile phone enabled by the Bluetooth® system and remove from inside the vehicle. If the mobile phone is not removed from the vehicle and a call is received during the installation process, the procedure will not be successful. |  |
| 2 | Insert the USB pen in the USB port of the diagnostic instrument. Insert the update CD in the tester, then turn on. Select the language in which instructions are to be read. When the final user licence appears, press I Accept. | You cannot continue if you do not press I Accept |
| 3 | In the main menu, select Create multilingual pen, wait for the software to be installed on the USB pen and remove | The USB pen is not supported by the diagnostic tester or software: use a compatible USB pen. Pens supported are with standard USB 1.0, 1.1 or 2.0 connectors and capacity up to 1 GB. The following models are certainly supported: Lexar™ JumpDrive® 2.0 512 MB, Memorex® Travel Driver 256 MB USB 2.0, Memorex® Travel Driver 1 GB USB 2.0, PNY® Attaché 256 MB USB 2.0, SanDisk® Cruzer™ micro 256 MB USB 2.0, SanDisk® Cruzer™ Mini 256 MB / 1 GB USB 2.0 and Sony® Micro Vault® |
| 4 | Press the START/STOP button (panel off). Remove the radio Op. 5570T80 CAR RADIO EQUIPMENT - R+R [→939011077] Press the START/STOP button (panel off). Check hat the message "Install language <selected language>? appears on the panel. The procedure will not be successful if the USB pen is removed during the installation procedure. Re-insert the pen, wait for 30 seconds and repeat this step | The installation procedure starts automatically: move on to Step 6 |
| 5 | Press the SRC or MAIN buttons to activate the installation procedure |  |
| 6 | Check that the message "Update complate" appears after update | If a software update is available, install by running the test **See Test 5570TP BLUETOOTH SOFTWARE UPDATING PROCEDURE** |
| 7 | Press the START/STOP button (panel off). Wait 3 minutes. Press the START/STOP button (panel on) and check that the language update is complete | Repeat the entire procedure |

## 5570TO CHECK OPERATION OF VOICE RECOGNITION  [939005373]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5570 ACCESSORIES > 5570T CAR RADIO AND CAR TELEPHONE > 5570TO CHECK OPERATION OF VOICE RECOGNITION
- Kind: test / check procedure
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005373

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Press the START/STOP button (panel off). Press the voice recognition button among the steering wheel controls (lower left in the left unit) and check whether a tone can be heard indicating activation of the function | Continue as instructed in the See table N069 THE BLUETOOTH CONTROLS ON THE STEERING WHEEL DO NOT WORK [→939005406 N069 THE BLUETOOTH CONTROLS ON THE STEERING WHEEL DO NOT WORK] |
[image: https://sloeber94.github.io/elrnDB/media/946000943.jpg]
|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 2 | Speak the word "Help" in the langauge installed on the Bluetooth® system and check that the systems responds with a voice message | Continue as instructed in the See Test 5570TN BLUETOOTH LANGUAGE UPDATE PROCEDURE [→939005372 5570TN BLUETOOTH LANGUAGE UPDATE PROCEDURE] then move on to Step 7 |
| 3 | Press the voice recognition button to interrupt the message and say the word "Settings" in the langauge set on the Bluetooth® system and check that the system responds with a voice message | Continue as instructed in the See Test 5570TN BLUETOOTH LANGUAGE UPDATE PROCEDURE [→939005372 5570TN BLUETOOTH LANGUAGE UPDATE PROCEDURE] then move on to Step 7 |
| 4 | Press the voice recognition button to interrupt the message and say the word "Cancel" in the langauge set on the Bluetooth® system and check that the system deactivates the voice recognition | Continue as instructed in the See Test 5570TN BLUETOOTH LANGUAGE UPDATE PROCEDURE [→939005372 5570TN BLUETOOTH LANGUAGE UPDATE PROCEDURE] then move on to Step 7 |
| 5 | While the customer's phone is connected to Convergence, press the voice recognition button and say the keyword "Telephone" in the langauge set on the Bluetooth® system and check that the system responds with a voice message | Continue as instructed in the See Test 5570TN BLUETOOTH LANGUAGE UPDATE PROCEDURE [→939005372 5570TN BLUETOOTH LANGUAGE UPDATE PROCEDURE] then move on to Step 7 |
| 6 | Check how to operate the mobile phone voice recognition correctly by reading the phone user handbook. The system should work on the vehicle too if the settings are correct. The test can be considered over | The problem is inherent to the phone: the customer must contact a mobile phone service centre |
| 7 | Carry out Bluetooth Network Disconnection active diagnosis, then repeat the entre test and ensure it is successful | Replace the Bluetooth® control unit Op. 5570T49 BLUETOOTH ELECTRONIC CONTROL UNIT - R.R. [→939004927] |

## 5070TP BLUETOOTH SOFTWARE LANGUAGE UPDATE PROCEDURE  [939005374]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5570 ACCESSORIES > 5570T CAR RADIO AND CAR TELEPHONE > 5070TP BLUETOOTH SOFTWARE LANGUAGE UPDATE PROCEDURE
- Kind: test / check procedure
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005374

> Note: If a customer comes to the repair workshop with a vehicle on which a Bluetooth® system is installed and an Update CD is available in the workshop, it is highly advisable to run this procedure at the end of the repairs.
|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Disconnect the mobile phone enabled by the Bluetooth® system and remove from inside the vehicle. If the mobile phone is not removed from the vehicle and a call is received during the installation process, the procedure will not be successful |  |
| 2 | Insert the USB pen in the USB port of the diagnostic instrument. Insert the update CD in the diagnostic equipment, then switch it on. Select the language for the instructions. When the final user licence appears, press I Accept. | You cannot continue if you do not press I Accept |
| 3 | Select Create update pen in the main menu, wait for the software to install (Capacity update USB error should not appear on the panel) on the USB pen and remove. | The USB pen is not supported by the diagnosic instrument or sofware (or, in the event of an error, its capacity is insufficient): use a compatible USB pen of sufficient capacity. Pens supported are with standard USB 1.0, 1.1 or 2.0 connectors and capacity up to 1 GB. The following models are certainly supported: Lexar™ JumpDrive® 2.0 512 MB, Memorex® Travel Driver 256 MB USB 2.0, Memorex® Travel Driver 1 GB USB 2.0, PNY® Attaché 256 MB USB 2.0, SanDisk® Cruzer™ micro 256 MB USB 2.0, SanDisk® Cruzer™ Mini 256 MB / 1 GB USB 2.0 and Sony® Micro Vault® |
| 4 | Press the START/STOP button (panel off). Remove the radio Op. 5570T80 CAR RADIO EQUIPMENT - R+R [→939011077] Insert the USB pen in the special opening in the Bluetooth® device (behind the radio). Press the START/STOP button (panel on). Check that the words "Update complete" appear on the instrument panel at the end of the update and not one of the "USB key error" or "USB update Capacity/Firm/File error" errors. The procedure will not be successful if the USB pen is removed during the installation procedure. Re-insert the pen, wait for 30 seconds and repeat this step | If an error is present, try to repeat this Step. If the problem persists, move on to Step 6 |
| 5 | Press the START/STOP button (panel off). Remove the USB pen from the USB port. The test is over |  |
| 6 | The problem may be caused by a non-original update CD. Ensure that a copy of the update CD has not been used to run the procedure | Replace the Bluetooth® control unit Op. 5570T49 BLUETOOTH ELECTRONIC CONTROL UNIT - R.R. [→939004927] |

## 5580 SPECIAL ACCESSORIES  [939010301]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5580 SPECIAL ACCESSORIES
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010301
- Subtopics: 5580A CRUISE CONTROL SYSTEM [939010302]; 5580C AIR BAG SYSTEM [939005088]; 5580E ANTI-THEFT DEVICE [939010310]; 5580H PARKING OBSTACLE DETECTION DEVICE [939010315]; 5580M ON-BOARD NAVIGATOR [939010320]; 5580P CONNECT PANEL [939010322]; 5580T BOSE SOUND SYSTEM [939010327]

## 5580A CRUISE CONTROL SYSTEM  [939010302]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5580 SPECIAL ACCESSORIES > 5580A CRUISE CONTROL SYSTEM
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010302
- Subtopics: 5580AA Cruise Control ON/OFF control check [939010303]; 5580AB Cruise Control SET + control check [939010304]; 5580AC Cruise Control "RECALL" control check [939010305]; 5580AD Cruise Control "SET -" control check [939010306]; 5580AE CRUISE CONTROL OPERATION ROAD TEST [939010307]

## 5580AA Cruise Control ON/OFF control check  [939010303]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5580 SPECIAL ACCESSORIES > 5580A CRUISE CONTROL SYSTEM > 5580AA Cruise Control ON/OFF control check
- Kind: test / check procedure
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010303

| STEP | CHECK TO BE CONDUCTED | SOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | **Check power supply (+15)** Place the Cruise Control system control in the ON position and check the electrical continuity between pins 2 and 4 | Replace the Cruise Control lever assembly Op. 5580A10 CRUISE CONTROL LEVER ASSEMBLY - R+R [→939011085] |

## 5580AB Cruise Control SET + control check  [939010304]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5580 SPECIAL ACCESSORIES > 5580A CRUISE CONTROL SYSTEM > 5580AB Cruise Control SET + control check
- Kind: test / check procedure
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010304

| STEP | CHECK TO BE CONDUCTED | SOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | **Check contact continuity** Place the Cruise Control system control in the "SET+" position and check the electrical continuity between pins 6 and 4 | Replace the Cruise Control lever assembly Op. 5580A10 CRUISE CONTROL LEVER ASSEMBLY - R+R [→939011085] |

## 5580AC Cruise Control "RECALL" control check  [939010305]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5580 SPECIAL ACCESSORIES > 5580A CRUISE CONTROL SYSTEM > 5580AC Cruise Control "RECALL" control check
- Kind: test / check procedure
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010305

| STEP | CHECK TO BE CONDUCTED | SOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | **Check contact continuity** Place the Cruise Control control in "ON" position Press the RECALL button and check the electrical continuity across pins 1 and 2 | Replace the Cruise Control lever assembly Op. 5580A10 CRUISE CONTROL LEVER ASSEMBLY - R+R [→939011085] |

## 5580AD Cruise Control "SET -" control check  [939010306]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5580 SPECIAL ACCESSORIES > 5580A CRUISE CONTROL SYSTEM > 5580AD Cruise Control "SET -" control check
- Kind: test / check procedure
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010306

| STEP | CHECK TO BE CONDUCTED | SOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | **Check contact continuity** Press the "SET-" button and check the electrical continuity across pins 4 and 5 | Replace the Cruise Control lever assembly Op. 5580A10 CRUISE CONTROL LEVER ASSEMBLY - R+R [→939011085] |

## 5580AE CRUISE CONTROL OPERATION ROAD TEST  [939010307]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5580 SPECIAL ACCESSORIES > 5580A CRUISE CONTROL SYSTEM > 5580AE CRUISE CONTROL OPERATION ROAD TEST
- Kind: test / check procedure
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010307

Take the vehicle on the road under safe conditions and respecting the highway code
Turn on the CRUISE CONTROL system and set the ON/OFF switch on the CRUISE CONTROL stalk to ON
Check the Cruise Control warning light comes on.
Drive the vehicle at 50 or 70 km/h in 4th gear (according to the maximum speed limit on the road).
Turn the wheel on the CRUISE CONTROL stalk towards SET + and release it immediately to store the speed reached.
Remove your foot from the accelerator and check the vehicle maintains the set speed.
Turn the wheel on the CRUISE CONTROL stalk toward the SET+ position and maintain the position to increase the speed to 70 or 90 km/h (according to maximum speed limit on the road).
> Note: do not operate the accelerator.
Release the control wheel and maintain the set speed for a few seconds.
Press the BRAKE pedal and release immediately, then wait for the vehicle speed to drop to 50 or 70 km/h
> Note: do not operate the clutch.
Press and release the RESUME key on the end of the stalk and check that the vehicle returns to the last stored speed value (70 or 90 km/h, according to the level set previously).
> Note: do not operate the accelerator.
Press the CLUTCH pedal and release immediately, then wait for the vehicle speed to drop to 50 or 70 km/h
> Note: do not operate the brake
Press and release the RECALL key on the end of the CRUISE CONTROL stalk and check that the vehicle returns to the last stored speed value (70 or 90 km/h, according to the level set previously).
> Note: do not operate the accelerator.
Turn the wheel on the CRUISE CONTROL stalk towards SET- to reduce vehicle speed to 50 or 70 km/h.
> Note: do not operate the brake, clutch or accelerator pedals.
Release the control wheel and maintain the set speed for a few seconds.
Turn off the system by setting the ON/OFF switch on the CRUISE CONTROL stalk to OFF and check that the vehicle speed drops.
> Note: do not operate the brake, clutch or accelerator pedals.

## 5580C AIR BAG SYSTEM  [939005088]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5580 SPECIAL ACCESSORIES > 5580C AIR BAG SYSTEM
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005088
- Subtopics: 5580CG Check the passenger bag disablement selector [939005089]

## 5580CG Check the passenger bag disablement selector  [939005089]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5580 SPECIAL ACCESSORIES > 5580C AIR BAG SYSTEM > 5580CG Check the passenger bag disablement selector
- Kind: test / check procedure
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939005089

- Disconnect the selector
- Connect the Examiner in Ohmmeter mode to the selector contacts
- With the selector in On position, check for a resistance of 100 ohms
- With the selector in OFF position, check for a resistance of 400 ohms

## 5580E ANTI-THEFT DEVICE  [939010310]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5580 SPECIAL ACCESSORIES > 5580E ANTI-THEFT DEVICE
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010310
- Subtopics: 5580EA ANTI-THEFT REMOTE CONTROL OPERATION CHECK [939010311]; 5580EB SIREN FUNCTIONAL TEST [939010312]; 5580EC ULTRASOUND/ANTI-LIFT MODULE CHECK [939010313]; 5580ED ELECTRIC STEERING LOCK CHECK [939010314]

## 5580EA ANTI-THEFT REMOTE CONTROL OPERATION CHECK  [939010311]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5580 SPECIAL ACCESSORIES > 5580E ANTI-THEFT DEVICE > 5580EA ANTI-THEFT REMOTE CONTROL OPERATION CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010311

> Note: The key remote control is supplied by a CR2032 lithium battery (3 V, 220 mAh), remote control operation is ensured between 2.6 and 3.6 V with a maximum current of 15 mA. At least 9000 activations of 1 s duration and 3000 activations of 5 s duration are guaranteed over a period of two years.The battery voltage is monitored to check the charge level: the threshold is set at 2.6±0.06 V. If the remote control receiver detects that the battery is flat, it is still possible to carry out a total of 100 operations.Operating frequency: 433.92 MHz.
|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Take out the key battery and connect the diagnostic instrument in Voltmeter mode to the key terminals with the correct polarity. Check that the voltage exceeds 2.2 Volts. | Replace the battery |
> Note: Note that after replacing the battery, the remote control variable code must be re-synchronised: this operation is carried out by pressing the remote control key twice.
> Note: Note that if the remote control has been activated more than 255 times, variable code synchrony between the sending unit and the receiver will be lost (the receiver will no longer be able to identify a variable code message correctly). Synchrony should therefore be restored by pressing the remote control unit key twice.

## 5580EB SIREN FUNCTIONAL TEST  [939010312]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5580 SPECIAL ACCESSORIES > 5580E ANTI-THEFT DEVICE > 5580EB SIREN FUNCTIONAL TEST
- Kind: test / check procedure
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010312

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Connect the diagnostic instrument in Voltmeter mode with the positive terminal on Pin 1 and the negative earthed to Pin 3 of the alarm siren See P090 ALARM SIREN [→939004618] The direct voltage reading should be 12 Volt. | Restore the connections between the Body Computer node, siren and earth See E7015 ALARM [→939011825] |
| 2 | Disconnect the siren connectora Body Computer connector B and check the continuity of the wiring between Pin 2 of the siren connector and Pin 25 of Body Computer connector B See P090 ALARM SIREN [→939004618] See M001 BODY COMPUTER [→939004296] | Restore wiring continuity See E7015 ALARM [→939011825] |
| 3 | Check the insulation of the earth line See E7015 ALARM [→939011825] | Restore wiring insulation |
| 4 | Replace the siren |  |
- Siren
[image: https://sloeber94.github.io/elrnDB/media/939003066.jpg]

- Siren pinout
1. Fuel system
2. Serial line
3. Earth
4. N.C.

## 5580EC ULTRASOUND/ANTI-LIFT MODULE CHECK  [939010313]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5580 SPECIAL ACCESSORIES > 5580E ANTI-THEFT DEVICE > 5580EC ULTRASOUND/ANTI-LIFT MODULE CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010313

> Note: The ultrasound and antilift modules are located in the front courtesy light
|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Connect the diagnostic instrument in Voltmeter mode with the positive terminal connected to Pin 1 and the negative earthed to Pin 2 of the volumetric sensor unit for the alarm. The direct battery voltage reading should be 12 Volts. See G010 FRONT COURTESY LIGHT [→939004020] Move on to Step 3 | Move on to Step 2 |
| 2 | Check in the under-dashboard junction unit whether fuse F39 has blown (it is the second from the top in the left-hand column) and replace. See B002 JUNCTION UNIT UNDER DASHBOARD [→939003761] The test can be considered over | Restore the power supply See E7015 ALARM [→939011825] |
| 3 | Connect the positive probe to Pin 3 of the unit and the negative to Earth. See G010 FRONT COURTESY LIGHT [→939004020] Turn the key ON and ensure the reading is 12 Volts. Move on to Step 5 | Move on to Step 4 |
| 4 | Check in the under-dashboard junction unit whether fuse F49 has blown (it is in the centre in the right-hand column) and replace. See B002 JUNCTION UNIT UNDER DASHBOARD [→939003761] The test can be considered over | Replace the antilift sensors Op. 5580E50 ANTITHEFT DEVICE VOLUMETRIC SENSOR R R FOLLOWING ELECTRICAL CIRCUIT CHECK [→939011105] |
| 5 | Disconnect connector D from the Body Computer. See M001 BODY COMPUTER [→939004296] Connect the diagnostic instrument in Ohmmeter mode between Pin 4 of the unit side connector and Pin 7 of connector D Body Computer side. See G010 FRONT COURTESY LIGHT [→939004020] See M001 BODY COMPUTER [→939004296] Ensure the wiring is continuous and the earth is insulated | Restore continuity/insulation See E7015 ALARM [→939011825] |
| 6 | Replace the antilift sensors Op. 5580E50 ANTITHEFT DEVICE VOLUMETRIC SENSOR R R FOLLOWING ELECTRICAL CIRCUIT CHECK [→939011105] |  |
- Courtesy light module control unit
[image: https://sloeber94.github.io/elrnDB/media/939003067.jpg]

- Pin Out
| Pin | Function |
| --- | --- |
| 1 | + 30 |
| 2 | Earth |
| 3 | + 15 |
| 4 | A-BUS |

## 5580ED ELECTRIC STEERING LOCK CHECK  [939010314]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5580 SPECIAL ACCESSORIES > 5580E ANTI-THEFT DEVICE > 5580ED ELECTRIC STEERING LOCK CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010314

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Connect the diagnostic instrument in Voltmeter mode with the positive terminal connected to Pin C1 and the negative earthed to Pin A4 of the steering lock control unit. The direct battery voltage reading should be 12 Volts. See M089 STEERING LOCK CONTROL UNIT (NBS) [→939004386] | Restore wiring continuity See E7065 ELECTRIC STEERING LOCK [→939011845] |
| 2 | Insert a key in the key reader. Connect the diagnostic instrument in Voltmeter mode with the positive terminal connected to Pin A6 and the negative earthed. The direct battery voltage reading should be 12 Volts. See M089 STEERING LOCK CONTROL UNIT (NBS) [→939004386] Move on to Step 4 | Move on to Step 3 |
| 3 | Check whether the wiring is continuous between Pin 12 of the ignition device and control unit Pin A6. See H003 IGNITION DEVICE [→939004060] See M089 STEERING LOCK CONTROL UNIT (NBS) [→939004386] Repair if necessary See E7065 ELECTRIC STEERING LOCK [→939011845] The test can be considered over | Continue as indicated See Test 5505AF CHECK OF THE EFFICIENCY OF KEY ACKNOWLEDGEMENT DEVICE [→939010278 5505AF CHECK OF THE EFFICIENCY OF KEY ACKNOWLEDGEMENT DEVICE] |
| 4 | Disconnect the wiring connector from the control unit See M089 STEERING LOCK CONTROL UNIT (NBS) [→939004386] Connect the diagnostic instrument in Ohmmeter mode with one probe between Pin A5 of the control unit and Earth See M089 STEERING LOCK CONTROL UNIT (NBS) [→939004386] Press the clutch pedal and check for an earth signal. Move on to Step 6 if no clutch signal is detected by the steering lock node, the car can still be started up by pressing the brake pedal | Move on to Step 5 |
| 5 | Check the continuity of the wiring between Pin 4 of the clutch pedal switch and control unit Pin A5. See I031 CLUTCH PEDAL SWITCH [→939004119] See M089 STEERING LOCK CONTROL UNIT (NBS) [→939004386] Repair if necessary See E7065 ELECTRIC STEERING LOCK [→939011845] If necessary, replace the clutch pedal switch **Op. 1056B78** or alternatively Op. 1060D42 SWITCH ON CLUTCH PEDAL- R. R (DIESEL ENGINES) [→939010547] The test can be considered over | Replace the steering lock node Op. 5580E17 STEERING LOCK - R.R [→939011103] |
| 6 | With the diagnostic instrument in Voltmeter mode, connect the positive probe to control unit Pin B7 and the negative to earth See M089 STEERING LOCK CONTROL UNIT (NBS) [→939004386] Press the clutch pedal. Press the ignition button. Check for a battery voltage signal of 12 Volts. Move on to Step 8 | Move on to Step 7 |
| 7 | Check whether or not there is continuity in the wiring between Pin B7 of the control unit and Pin 6 of the button See M089 STEERING LOCK CONTROL UNIT (NBS) [→939004386] See H2 STARTER BUTTON [→939004057 H002 STARTING PUSH BUTTON] Repair if necessary See E7065 ELECTRIC STEERING LOCK [→939011845] The test can be considered over | Replace the ignition button Op. 5520G30 START/STOP SWITCH FOR EASY-GO SYSTEM STARTER MOTOR - R.R. [→939011004] |
| 8 | Press the ignition button. With the diagnostic instrument in Voltmeter mode, connect the positive probe to control unit Pin B6 and the negative to earth See M089 STEERING LOCK CONTROL UNIT (NBS) [→939004386] Press the clutch pedal. Press the ignition button. Check for a battery voltage signal of 12 Volts. Move on to Step 10 | Move on to Step 9 |
| 9 | Check whether or not there is continuity in the wiring between Pin B6 of the control unit and Pin 4 of the button See M089 STEERING LOCK CONTROL UNIT (NBS) [→939004386] See H2 STARTER BUTTON [→939004057 H002 STARTING PUSH BUTTON] Repair if necessary See E7065 ELECTRIC STEERING LOCK [→939011845] The test can be considered over | Replace the ignition button Op. 5520G30 START/STOP SWITCH FOR EASY-GO SYSTEM STARTER MOTOR - R.R. [→939011004] |
| 10 | With the diagnostic instrument in Voltmeter mode, connect the positive probe to control unit Pin B1 and the negative to earth See M089 STEERING LOCK CONTROL UNIT (NBS) [→939004386] The direct voltage reading should be 12 Volt. | Replace the steering lock node Op. 5580E17 STEERING LOCK - R.R [→939011103] |
| 11 | With the diagnostic instrument in Voltmeter mode, connect the positive probe to control unit Pin A1 and the negative to earth See M089 STEERING LOCK CONTROL UNIT (NBS) [→939004386] The direct voltage reading should be 12 Volt. | Replace the steering lock node Op. 5580E17 STEERING LOCK - R.R [→939011103] |
| 12 | With the diagnostic instrument in Voltmeter mode, connect the positive probe to control unit Pin A8 and the negative to earth See M089 STEERING LOCK CONTROL UNIT (NBS) [→939004386] The direct voltage reading should be 12 Volt. | Replace the steering lock node Op. 5580E17 STEERING LOCK - R.R [→939011103] |
| 13 | With the diagnostic instrument in Voltmeter mode, connect the positive probe to control unit Pin B2 and the negative to earth See M089 STEERING LOCK CONTROL UNIT (NBS) [→939004386] The direct voltage reading should be 12 Volt. | Replace the steering lock node Op. 5580E17 STEERING LOCK - R.R [→939011103] |
| 14 | With the diagnostic instrument in Voltmeter mode, connect the positive probe to control unit Pin C8 and the negative to earth See M089 STEERING LOCK CONTROL UNIT (NBS) [→939004386] The direct voltage reading should be 12 Volt. | Replace the steering lock node Op. 5580E17 STEERING LOCK - R.R [→939011103] |
| 15 | With the diagnostic instrument in Voltmeter mode, connect the positive probe to control unit Pin B8 and the negative to earth See M089 STEERING LOCK CONTROL UNIT (NBS) [→939004386] Press the clutch pedal. Press the ignition button. Check for a battery voltage signal of 12 Volts. | Replace the steering lock node Op. 5580E17 STEERING LOCK - R.R [→939011103] |
| 16 | With the diagnostic instrument in Voltmeter mode, connect the positive probe to control unit Pin C4 and the negative to earth See M089 STEERING LOCK CONTROL UNIT (NBS) [→939004386] Press the brake pedal and the battery voltage reading should be 12 Volts. Release the brake pedal and the voltage reading should be 0 volts. Move on to Step 20 | Move on to Step 17 |
| 17 | Check whether or not there is continuity in the wiring between Pin 4 of the brake pedal switch and Pin C4 of the control unit. See I030 BRAKE PEDAL SWITCH [→939004116] See M089 STEERING LOCK CONTROL UNIT (NBS) [→939004386] Repair if necessary See E7065 ELECTRIC STEERING LOCK [→939011845] The test can be considered over | Check the power supply is correct to the brake pedal switch and restore if necessary. Move on to Step 18 |
| 18 | Check the diagnostic instrument in parameter mode to ensure the brake pedal switch is operating correctly. | Replace the switch Op. 5550D10 BRAKE LIGHT SWITCH - R+R [→939011051] or alternatively Op. 1060D38 SWITCH ON BRAKE PEDAL - R.R (DIESEL ENGINES) [→939010546] |
| 19 | Replace the steering lock node Op. 5580E17 STEERING LOCK - R.R [→939011103] The test can be considered over |  |
| 20 | With the diagnostic instrument in Voltmeter mode, connect the positive probe to control unit Pin C7 and the negative to earth See M089 STEERING LOCK CONTROL UNIT (NBS) [→939004386] Press the brake pedal and the battery voltage reading should be 0 Volts. Release the brake pedal and the voltage reading should be 12 volts. | Move on to Step 17 |
| 21 | With the diagnostic instrument in Voltmeter mode, connect the positive probe to control unit Pin C2 and the negative to earth See M089 STEERING LOCK CONTROL UNIT (NBS) [→939004386] Turn on the side lights and check for the presence of a PWM signal | Replace the steering lock node Op. 5580E17 STEERING LOCK - R.R [→939011103] |

## 5580H PARKING OBSTACLE DETECTION DEVICE  [939010315]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5580 SPECIAL ACCESSORIES > 5580H PARKING OBSTACLE DETECTION DEVICE
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010315
- Subtopics: 5580HB PARKING SENSOR SYSTEM OPERATION CHECK [939010316]; 5580HC CHECK THE OPERATION OF THE PARKING SENSOR DISABLEMENT BUTTON [939010317]; 5580HD REAR BUZZER OPERATION CHECK [939010318]; 5580HE FRONT BUZZER OPERATION CHECK [939010319]

## 5580HB PARKING SENSOR SYSTEM OPERATION CHECK  [939010316]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5580 SPECIAL ACCESSORIES > 5580H PARKING OBSTACLE DETECTION DEVICE > 5580HB PARKING SENSOR SYSTEM OPERATION CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010316

| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | **Check the front ultrasound sensor power supply** Key in on position Engage reverse gear Press the parking sensor disablement button located on the front courtesy light and ensure the led on the button is on (sensors enabled) Connect the voltmeter with the positive probe at pin 1 and the negative earth probe for the sensor connector and check that there is a positive voltage of 12 V | Renew the wiring between the parking sensor control unit and the sensor involved Replace the sensor Replace the parking sensor control unit Op. 5580H10 PARKING OBSTACLE DETECTION DEVICE ELECTRONIC CONTROL UNIT - R.R. [→939004810] |
| 2 | **Rear ultrasound sensor power supply check** Key in on position Engage reverse gear Connect the voltmeter with the positive probe at pin 1 and the negative earth probe for the sensor connector and check that there is a positive voltage of 12 V | Renew the wiring between the parking sensor control unit and the sensor involved Replace the sensor Op. 5580H36 PARKING SENSOR SYSTEM REAR SENSORS - R.R. WITH REAR BUMPER REMOVED [→939004814] Replace the parking sensor control unit Op. 5580H10 PARKING OBSTACLE DETECTION DEVICE ELECTRONIC CONTROL UNIT - R.R. [→939004810] |
| 3 | **Check the earth** Connect the voltmeter with the red probe at pin 3 and the positive probe earthed and check that the voltage is 0 Volt | Renew the broken wiring between the NSP and the sensor involved Replace the sensor Replace the parking sensor control unit Op. 5580H10 PARKING OBSTACLE DETECTION DEVICE ELECTRONIC CONTROL UNIT - R.R. [→939004810] |
| 4 | **Ultrasound signal check** Place the key in the ON position Connect the voltmeter with the positive probe to pin 2 and the negative probe earthed Press the START button on the Examiner. The figures in the image that appears must be evaluated with a tolerance of about 20%. They should in any case be similar to the graph in the figure. | Replace any faulty rear sensor(s) Op. 5580H36 PARKING SENSOR SYSTEM REAR SENSORS - R.R. WITH REAR BUMPER REMOVED [→939004814] Replace any faulty front sensor(s) Replace the parking sensor control unit Op. 5580H10 PARKING OBSTACLE DETECTION DEVICE ELECTRONIC CONTROL UNIT - R.R. [→939004810] |
[image: https://sloeber94.github.io/elrnDB/media/939003474.jpg]

## 5580HC CHECK THE OPERATION OF THE PARKING SENSOR DISABLEMENT BUTTON  [939010317]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5580 SPECIAL ACCESSORIES > 5580H PARKING OBSTACLE DETECTION DEVICE > 5580HC CHECK THE OPERATION OF THE PARKING SENSOR DISABLEMENT BUTTON
- Kind: test / check procedure
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010317

| STEP | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | **Check power supply** Turn the key to the ON position. Engage reverse gear Press the parking sensor disablement button on the front courtesy light Connect the voltmeter with the positive probe at pin 1 and the negative earth probe for the button connector and check that there is a positive voltage of 12 V and the button led comes on Check that the connector is correctly inserted in the other part. Try to move it from its seat by making small movements in all directions, grasping the connector body in your fingers and the wiring in your hand. The connector must stay in place Exercise a moderate pulling force. The connector must stay in place check whether the power supply goes off, goes on and/or vice versa (touching/not touching) Pull the lead and check the stability in the groove (should not move back): exercise repeated pull-push-pull cycles on the lead and ensure its immobility. **Examine the crimping:** Use a lens to examine the terminal crimping area. The barrels must be turned symmetrically and no strands should emerge from the crimped area. The bare wire section under the barrels must emerge by 0.5. | Renew the broken wiring between the NSP and the front courtesy light. Replace the front courtesy light Op. 7040E40 MODULAR FRONT COURTESY LIGHT - R R [→939011255] Replace the parking sensor control unit Op. 5580H10 PARKING OBSTACLE DETECTION DEVICE ELECTRONIC CONTROL UNIT - R.R. [→939004810] |
| 2 | **Check the earth signal** Connect the voltmeter with the negative probe to pin 1 and the positive probe to pin 2, press the button and ensure a negative signal is present | Renew the broken wiring between the NSP and the courtesy light. Replace the front courtesy light Op. 7040E40 MODULAR FRONT COURTESY LIGHT - R R [→939011255] |

## 5580HD REAR BUZZER OPERATION CHECK  [939010318]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5580 SPECIAL ACCESSORIES > 5580H PARKING OBSTACLE DETECTION DEVICE > 5580HD REAR BUZZER OPERATION CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010318

> Note: the readings are subject to a tolerance of about 25%
| **STEP** | **CHECK TO BE PERFORMED** | **RESOLUTION IF THE CHECK IS NOT OK** |
| --- | --- | --- |
| **1** | **Check rear buzzer impedance** Connect the negative supply terminal for the Examiner to the vehicle earth Switch on the Examiner and set it to ohmmeter mode and calibrate, bypassing the probes Connect the leads (black and red probes) to the buzzer terminals without disconnecting it from the parking sensor control unit The measurement should be about 51 Ohm which is the value for the buzzer impedance. | Replace buzzer |
| **2** | **Check rear buzzer control line impedance** Disconnect the buzzer connector Connect the ohmmeter to the connector terminals and measure a value of 230 Kohm which should be the system impedance | Renew the wiring continuity between the parking control unit and the buzzer see wiring diagram See E3090 PARKING SENSOR [→939011665] Replace the parking sensor control unit Op. 5580H10 PARKING OBSTACLE DETECTION DEVICE ELECTRONIC CONTROL UNIT - R.R. [→939004810] |
| **3** | **Rear buzzer positive power supply check** With the key on and reverse gear engaged and the Examiner in voltmeter mode Connect between pin 4 of connector AB of the parking control unit and earth Check that there is a presence of 12 Volt | Restore wiring continuity between the parking control unit and the buzzer See E3090 PARKING SENSOR [→939011665] Replace the parking sensor control unit Op. 5580H10 PARKING OBSTACLE DETECTION DEVICE ELECTRONIC CONTROL UNIT - R.R. [→939004810] |
| **4** | **Check rear buzzer signal** Turn the key on and engage reverse gear With the Examiner in voltmeter mode, select an full scale deflection of 20 Volt and time base of 1 second Connect the red voltmeter probe to pin 3 of connector AB of the parking control unit and the black probe to earth Get close to the rear sensors with the device working, check for the presence of the electrical signal. Press the START button on the Examiner. The image that appears should be similar to the one below | Renew the wiring continuity between the parking control unit and the buzzer see wiring diagram See E3090 PARKING SENSOR [→939011665] Replace the parking sensor control unit Op. 5580H10 PARKING OBSTACLE DETECTION DEVICE ELECTRONIC CONTROL UNIT - R.R. [→939004810] |
| **5** | **Check buzzer operation** Check that the buzzer is working properly in the presence of the buzzer activation signal and the positive power supply | Replace buzzer |
[image: https://sloeber94.github.io/elrnDB/media/939003475.jpg]

## 5580HE FRONT BUZZER OPERATION CHECK  [939010319]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5580 SPECIAL ACCESSORIES > 5580H PARKING OBSTACLE DETECTION DEVICE > 5580HE FRONT BUZZER OPERATION CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010319

| **STEP** | **CHECK TO BE PERFORMED** | **RESOLUTION IF THE CHECK IS NOT OK** |
| --- | --- | --- |
| **1** | **Check rear buzzer impedance** Connect the negative supply terminal for the Examiner to the vehicle earth Switch on the Examiner and set it to ohmmeter mode and calibrate, bypassing the probes Connect the leads (black and red probes) to the buzzer terminals without disconnecting it from the parking sensor control unit The measurement should be about 51 Ohm which is the value for the buzzer impedance. | Replace buzzer |
| **2** | **Check rear buzzer control line impedance** Disconnect the buzzer connector Connect the ohmmeter to the connector terminals and measure a value of 230 Kohm which should be the system impedance | Renew the wiring continuity between the parking control unit and the buzzer see wiring diagram See E3090 PARKING SENSOR [→939011665] Replace the parking sensor control unit Op. 5580H10 PARKING OBSTACLE DETECTION DEVICE ELECTRONIC CONTROL UNIT - R.R. [→939004810] |
| **3** | **Check the buzzer positive power supply** Place the key in the ON position Press the parking sensor disablement button and ensure the led on the button comes on to indicate enablement. With the Examiner in voltmeter mode. Connect between pin of parking sensor control unit connector LA and earth and ensure a voltage of 12 Volts is present | Restore wiring continuity between the parking control unit and the buzzer See E3090 PARKING SENSOR [→939011665] Replace the parking sensor control unit Op. 5580H10 PARKING OBSTACLE DETECTION DEVICE ELECTRONIC CONTROL UNIT - R.R. [→939004810] |
| **4** | **Check the buzzer signal** Place the key in the ON position Press the parking sensor disablement button and ensure the led on the button comes on to indicate enablement. With the Examiner in voltmeter mode, select an full scale deflection of 20 Volt and time base of 1 second Connect the red voltmeter probe to pin 2 of connector LA of the parking control unit and the black probe to earth Get close to the rear sensors with the device working, check for the presence of the electrical signal. Press the START button on the Examiner. The image that appears should be similar to the one below | Renew the wiring continuity between the parking control unit and the buzzer see wiring diagram See E3090 PARKING SENSOR [→939011665] Replace the parking sensor control unit Op. 5580H10 PARKING OBSTACLE DETECTION DEVICE ELECTRONIC CONTROL UNIT - R.R. [→939004810] |
| **5** | **Check buzzer operation** Check that the buzzer is working properly in the presence of the buzzer activation signal and the positive power supply | Replace buzzer |
[image: https://sloeber94.github.io/elrnDB/media/939003476.jpg]

## 5580M ON-BOARD NAVIGATOR  [939010320]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5580 SPECIAL ACCESSORIES > 5580M ON-BOARD NAVIGATOR
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010320
- Subtopics: 5580MC SATELLITE NAVIGATOR OPERATION CHECK [939010321]

## 5580MC SATELLITE NAVIGATOR OPERATION CHECK  [939010321]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5580 SPECIAL ACCESSORIES > 5580M ON-BOARD NAVIGATOR > 5580MC SATELLITE NAVIGATOR OPERATION CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010321

**Check the operation of the satellite navigation system**
- Check that the map disc is consistent with the vehicle model.
- In NAV mode, check that the number of satellites in the last line on the right is at least 3 indicating that the satellite reception is correct. If the reading for the number of satellites is less than 3 then the reception is not good enough to locate the vehicle. It is probably a question of insufficient cover. In this case try and move the vehicle to an area where there is good reception or compare the reception with other cars located in the same place.
[image: https://sloeber94.github.io/elrnDB/media/939003477.jpg]
The satellite reception test should be carried out in an open area. In this case, without a comparison it is impossible to say whether or not the navigator is defective. If, on the other hand, the comparison reveals even worse reception, check the connection of the satellite aerial, the electrical continuity, the correct power supply and, if necessary, test with different equipment that is definitely working properly.
**For the road test:**
- Exit to NAV mode
- Check that the arrow moves consistently with the vehicle speed, otherwise check the presence of the milometer signal.
- Check that the arrow changes direction in line with the vehicle. If the arrow does not change direction this means that the gyroscope inside the map reader is broken and the Connect should be replaced.
- Enter a destination and activate the calculation of the route. Wait for the first instruction and the route on the display and check that it is correct.
Irregular instructions: before or after junctions, arrow out of position, they may be due to CD maps that are not up to date: a missing instruction stems from the fact that a road is not on the map because it has not been processed in digital form or the road network has been changed compared with the one on the map.
The navigator calculates the position of the vehicle both by means of the satellite signal and using the wheel rpm and the internal gyroscope bush signal. Problems of accuracy may arise when:
- The odometer speed signal and reversing signal are not received correctly
**Occasions when the navigation system should be initialised:**
- The vehicle is being transported with the battery disconnected and travelling in a tunnel (the navigator loses the references).
- Immediately after having changed the tyres (since the wheel rpm/distance conversion factor is not accurate).
- When replacing the Nit.
To initialize the navigator it is necessary to drive about 100 km in optimum satellite reception conditions. If all the tests have not highlighted defects then the problem lies in the Connect which should be replaced.

## 5580P CONNECT PANEL  [939010322]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5580 SPECIAL ACCESSORIES > 5580P CONNECT PANEL
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010322
- Subtopics: 5580PE CHECK THE OPERATION OF THE CONNECT GPS AERIAL MODULE [939010323]; 5580PJ CONNECT AUTODIAGNOSTIC PROCEDURE [939010324]; 5580PL CHECK OPERATION OF SIGNALS BETWEEN CD-CHANGER AND CONNECT [939010325]; 5580PO CONNECT POWER SUPPLY CHECK [939010326]

## 5580PE CHECK THE OPERATION OF THE CONNECT GPS AERIAL MODULE  [939010323]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5580 SPECIAL ACCESSORIES > 5580P CONNECT PANEL > 5580PE CHECK THE OPERATION OF THE CONNECT GPS AERIAL MODULE
- Kind: test / check procedure
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010323

| STEP | CHECK TO BE CARRIED OUT | SOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Withdraw the Connect unit from the dashboard and check, with the key ON, that a voltage of 5 Volts is prsent at the GPS aerial connector. If this voltage is not present, check the Connect is correctly supplied with power | Restore the correct Connect power supplyl and replace the Connect if OK Op. 5580P12 CONNECT PANEL REPLACE [→939004931] |

## 5580PJ CONNECT AUTODIAGNOSTIC PROCEDURE  [939010324]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5580 SPECIAL ACCESSORIES > 5580P CONNECT PANEL > 5580PJ CONNECT AUTODIAGNOSTIC PROCEDURE
- Kind: test / check procedure
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010324

Turn the key to the ON position.
Press the left knob to switch the CONNECT on.
Check that the display comes on.
Check that all the buttons/knobs for the CONNECT in the front panel are lit up.
Press TRIP button.
[image: https://sloeber94.github.io/elrnDB/media/939003068.jpg]
Check that the Setup screen 1 appears on the display:
[image: https://sloeber94.github.io/elrnDB/media/939003069.jpg]
- Press one of the reconfigurable buttons for the MY CAR item to access the Connect SETUP menu.
Check that the Setup screen 2 appears on the display:
[image: https://sloeber94.github.io/elrnDB/media/939003070.jpg]
- Press one of the following three reconfigurable buttons [T21] or [T22] pr [T23] for the CONNECT item to access the NITt SETUP menu.
Check that the Setup screen 3 appears on the display
[image: https://sloeber94.github.io/elrnDB/media/939003071.jpg]
- Press button [T21] or [T22] pr [T23] for the CONNECT item three consecutive times.
Press the right knob (R02) and check that screen 4 with the item "Assistance" appears on the display:
[image: https://sloeber94.github.io/elrnDB/media/939003072.jpg]
- Turn the right knob to select the item "Assistance" from the menu.
- Press the right knob to confirm and access the diagnostic data.
Check that the Setup screen 5 appears on the display (Diagnosis: speaker test):
[image: https://sloeber94.github.io/elrnDB/media/939003073.jpg]
The first part of the results of the tests carried out during self-diagnosis is displayed. The test outcome is shown for each outcome (e.g.: OK or ERROR).
Check the connections for the 4 audio channels for the four items in the list.
- Turn the right knob (R02) to select the "Next menu" item.
- Press the right knob (R02) to confirm, then check that the screen in Setup Fig. 6 is shown on the display:
[image: https://sloeber94.github.io/elrnDB/media/939003074.jpg]
The second part of the results of the tests carried out during self-diagnosis is displayed.
The result of the test is indicated for each item (Present/Absent, Activated/Deactivated or On/Off);
Check the CD Changer connection, only if this feature is included as an option in the vehicle specification.
Check the HI-FI Amplifier connection, only if this feature is included as an option in the vehicle specification.

## 5580PL CHECK OPERATION OF SIGNALS BETWEEN CD-CHANGER AND CONNECT  [939010325]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5580 SPECIAL ACCESSORIES > 5580P CONNECT PANEL > 5580PL CHECK OPERATION OF SIGNALS BETWEEN CD-CHANGER AND CONNECT
- Kind: test / check procedure
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010325

Foreword:
To carry out this check a music compact disc must be inserted in the tray (with the legible part correctly positioned).
Mastered CDs may be difficult or impossible to play. Test with original or good quality mastered CDs. CDRs can be played, but not MP3 CDs. If there is interference whilst playing CDs, check the screening of the audio connecting cable between the player and the Connect.
**CHECK LEFT AND RIGHT AF OUTPUT SIGNALS FROM CD CHANGER**
After having selected a track on a music Compact Disc, place the black voltmeter probe to pin 18 of the 20-way Connect connector (I) and the red probe alternately at the Connect signal input cables (pin 20 - right AF signal and pin 19 left AF signal). (See wiring diagram E3510 radio)
Select a 20V end of scale and 5 seconds on the Examiner (Voltmeter mode).
Press the Start button and take the reading: the values obtained should be similar to the ones in the diagram below.
If the signal is similar to the one shown in the diagram, this means that the CD Changer is sending the audio signals correctly. Continue with the check on the radio input signal.
If this does not take place, check that the signal is not similar to the one shown in the diagram below.
[image: https://sloeber94.github.io/elrnDB/media/939003075.jpg]
If the audio signals to the Connect radio are not present, check that the activation signal coming from the radio and the correct power supply are present at the CD Changer connector.
If this is the case, continue checking the continuity and the insulation to earth of the following wiring:
- Connection between pin 13 of the CD Changer connector and pin 13 of the Connect 20-way connector (CDC BUS RxD)
- Connection between pin 14 of the CD Changer connector and pin 14 of the Connect 20-way connector (CDC bus TxD)
- Connection between pin 17 of the CD Changer connector and pin 17 of the Connect 20-way connector (CDC bus Gnd)
**CHECK SERIAL LINE FOR COMMUNICATION WITH CD CHANGER**
After having selected a track on a music Compact Disc, position the black voltmeter probe to earth and the red probe alternately at pin 13 and 14 of the Connect 20-way connector. [See E3510 Radio]
Select a 20V end of scale and 5 seconds on the Examiner (Voltmeter mode).
Press the Start button and take the reading: the values obtained for both measurements should be similar to the ones in the diagram below.
[image: https://sloeber94.github.io/elrnDB/media/939003076.jpg]

## 5580PO CONNECT POWER SUPPLY CHECK  [939010326]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5580 SPECIAL ACCESSORIES > 5580P CONNECT PANEL > 5580PO CONNECT POWER SUPPLY CHECK
- Kind: test / check procedure
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010326

> Note: the Connect can be switched on manually, using the left knob or automatically with the key ON signal. If the Connect has been turned off manually (using the left knob), before turning the ignition OFF, it will not come out automatically at the next key ON.
| STEP | CHECK TO BE CARRIED OUT | SOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | **Check power supply (+15)** With the ignition ON, check that the correct battery voltage is present between pins 4 and 8 of the 8-way Connect connector and earth. Check the connector is correctly inserted in the other part. Try to move it from its seat by shifting it by a small amount in all directions, holding the connector case in your fingers and the wiring in your hand. The connector should remain in place Apply a moderate pulling force. The connector should remain in place check whether the power supply turns off, turns on and/or vice versa (touching/not touching) subject the cable to a pulling force and check cable stability (no shrinkage): apply repeated pull-push-pull cycles to the cable and check it remains immobile. Examine the crimping: Use a magnifying glass to examine the terminal criming area. The barrels must be turned symmetrically and three-stranded sections should not emerge from the criming area. The area of bare wire beneath the barrel must emerge by approximately 0.5 mm | Replace the 7.5A fuse F 49 located in the CPL, after identifying the cause Restore the wiring if defective |
| 2 | **Check earth** Disconnect 8-way connector A and connect an ohmmeter accross pin 8 and earth and check the resistance is lower than 1 ohm | Restore the correct earth connection between pin 8 and the earth point in the right dashboard area |
| 3 | **Check power supply +30** Check that the correct battery voltage is present between pins 7 and 8 of the 8-way Connect connector and earth. Check the wiring continuity | Replace the 15A fuse F 23 located in the CVM, after identifying the cause Restore the wiring if defective |
| 4 | **Check fuse** Check the condition of the fuse located at the back of the Connect. | If burnt out, search for the cause of the problem and replace it. |
| 5 | **Check action of protection** Disconnect Connector 8-way connector B. Turn the Connect off and on. Check whether one of the components (CD Changer, amplifier, sound boxes, etc.) is causing the radio fuse to blow. | Replace defective speakers Replace the defective amplifier **Op. 5570T36 AMPLIFIER FOR SPEAKER SYSTEM - R+R** Replace the CD Changer **Op. 5570T85** If none of the above steps has highlighted problems with the signals and the Connect continues not to switch on then it is defective. |

## 5580T BOSE SOUND SYSTEM  [939010327]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5580 SPECIAL ACCESSORIES > 5580T BOSE SOUND SYSTEM
- Kind: chapter (index of subtopics)
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010327
- Subtopics: 5580TA CHECK AUDIO AMPLIFIER OPERATION [939010328]

## 5580TA CHECK AUDIO AMPLIFIER OPERATION  [939010328]
- Path: Test > 55 ELECTRICAL EQUIPMENT > 5580 SPECIAL ACCESSORIES > 5580T BOSE SOUND SYSTEM > 5580TA CHECK AUDIO AMPLIFIER OPERATION
- Kind: test / check procedure
- Applies to: engines: 1.9 JTS, 2.2 JTS, 3.2 JTS, 1.9 JTD 8V, 1.9 JTD 16V, 2.4 JTD 20V; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010328

| STEP | CHECK TO BE CARRIED OUT | SOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | **Check power supply (+30)** Check for battery voltage between pin 1 of audio amplifier connector and earth Check the connector is correctly inserted in the other part. Try to move it from its seat by shifting it by a small amount in all directions, holding the connector case in your fingers and the wiring in your hand. The connector should remain in place Apply a moderate pulling force. The connector should remain in place check whether the power supply turns off, turns on and/or vice versa (touching/not touching) Subject the cable to a pulling force and check cable stability (no shrinkage): apply repeated pull-push-pull cycles to the cable and check it remains immobile. Examine the crimping: Use a magnifying glass to examine the terminal criming area. The barrels must be turned symmetrically and three-stranded sections should not emerge from the criming area. The area of bare wire beneath the barrel must emerge by approximately 0.5 mm | Replace fuse F61 in the boot compartment control unit if blown, after identifying the cause Restore the wiring between the boot compartment control unit and subwoofer |
| 2 | **Check earth** Disconnect the amplifier connector and connect an ohmmeter accross pin 2 and earth and check the resistance is lower than 1 ohm | Restore the earth connection |
| 3 | Check the activation signal from the radio With the radio on, check for the presence of a 12 Volt activation signal at pin 6 of the amplifier | Restore the connection between pin 6 of the amplifier and pin 6 of the radio PC connnector. If the signal is interrupted by the radio, replace the radio |

## 70 FITTINGS  [939010335]
- Path: Test > 70 FITTINGS
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010335
- Subtopics: 70B ROAD TEST FOR NOISE RECOGNITION [939010336]; 70C CHECK ON DOOR LOCK MICROSWITCHES [939010337]; 7005 PASSENGER COMPARTMENT FRONT SIDE DOORS [939010338]; 7010 PASSENGER COMPARTMENT REAR SIDE DOORS [939010343]; 7025 COMPARTMENT COVERS [939010346]; 7035 BODY WINDOW GLASSES [939010349]

## 70B ROAD TEST FOR NOISE RECOGNITION  [939010336]
- Path: Test > 70 FITTINGS > 70B ROAD TEST FOR NOISE RECOGNITION
- Kind: test / check procedure
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010336

|  | CHECK | Operation |
| --- | --- | --- |
| 1 | Before proceeding with the test, check that the tyre inflation pressure is correct. | Restore the correct tyre inflation pressure. |
| 2 | Check that the wheels are correctly balanced | Rebalance the wheels |
| 3 | Start up the engine and, with the vehicle stationary (switch off the ASR using the special button), check that the noise from the front area is not present. | The cyclical noises are due to the power unit. The test can be considered over |
| 4 | Steer, with the vehicle stationary, to the left and the right and check that there is no irregular noise and check that there is no irregular noise with the gearbox in neutral. | Continue as indicated See table S022 GEARBOX NOISE - IN NEUTRAL [→939009654 S022 GEARBOX NOISE - IN NEUTRAL] |
| 5 | Set off from stationary to check that there is no metallic noise or roughness. | Continue as indicated See table S021 GEARBOX NOISE - AT TAKE OFF [→939008298 S021 GEARBOX NOISE - AT TAKE OFF] |
| 6 | Still setting off from stationary, check that there are no transverse vibrations. | Continue as indicated See table S019 FORECARRIAGE TRANSVERSE VIBRATIONS [→939008259 S019 FORECARRIAGE TRANSVERSE VIBRATIONS] |
| 7 | Carry out a road test on an unmade road engaging the various gears. | Continue as indicated See table S023 GEARBOX NOISE - IN A SPECIFIC GEAR [→939009747 S023 GEARBOX NOISE - IN A SPECIFIC GEAR] |
| 8 | Carry out a road test on an unmade road engaging the various gears when cornering. | Continue as indicated See table S024 GEARBOX NOISE - WHEN CORNERING [→939009834 S024 GEARBOX NOISE - WHEN CORNERING] |
| 9 | With the help of a colleague, check that the noise is not due to one of the dashboard components not being properly fastened (when your hand is placed on top of it the noise either lessens or disappears). | The noise is due to creaking of the interior/exterior dashboard components. The test can be considered over |
| 10 | If the vehicle is fitted with a sun roof, check that the noise is not being caused by the later by opening and closing it and placing your hand on it to quieten any noise. | The noise is due to the sun roof. The test can be considered over |
| 11 | Brake in safe conditions to check whether the noise is only present during braking as a result of the brake discs. | The noise is caused by the brake discs. The test can be considered over |
| 12 | Pull the handbrake lever gently, whilst driving in a straight line, to check whether the noise disappears. | Adjust the handbrake travel Op. 3380A04 HANDBRAKE - ADJUST TRAVEL [→939005323] |
| 13 | During the previous check, make sure that there are no transverse vibrations during the pull and release stages. Increase the speed and check that there is no metallic noise, possibly accompanied by transverse vibrations which vary according to the vehicle speed or engine revs. | Continue as indicated See table S019 FORECARRIAGE TRANSVERSE VIBRATIONS [→939008259 S019 FORECARRIAGE TRANSVERSE VIBRATIONS] |
| 14 | Carry out a road test on an unmade road (cobblestones) to define the type of noise, checking that there is no creaking from the front area. | Continue as indicated See table S016 FRONT SUSPENSION NOISE (CREAKING/SQUEAKING) [→939007874 S016 FRONT SUSPENSION NOISE (CREAKING/SQUEAKING)] |
| 15 | Carry out a road test on an unmade road (cobblestones) to define the type of noise, checking that there is no whistling from the front area. | Continue as indicated See table S017 FRONT SUSPENSION NOISE (WHISTLING/HUMMING) [→939007876 S017 FRONT SUSPENSION NOISE (WHISTLING/HUMMING)] |
| 16 | Carry out a road test on an unmade road (cobblestones) to define the type of noise, checking that there is no knocking from the front area. | Continue as indicated See table S018 FRONT SUSPENSION NOISE (KNOCKING) [→939007911 S018 FRONT SUSPENSION NOISE (KNOCKING)] |
| 17 | Carry out a road test on an unmade road (cobblestones) to define the type of noise, checking that there is no creaking/clicking from the rear area. | Continue as indicated See table S026 REAR NOISE (CREAKING/SQUEAKING/TICKING) [→939009942 S026 REAR NOISE (CREAKING/SQUEAKING/TICKING)] |
| 18 | Carry out a road test on an unmade road (cobblestones) to define the type of noise, checking that there is no whistling from the rear area. | Continue as indicated See table S027 REAR NOISE (WHISTLING/HUMMING) [→939009998 S027 REAR NOISE (WHISTLING/HUMMING)] |
| 19 | Carry out a road test on an unmade road (cobblestones) to define the type of noise, checking that there is no knocking from the rear area. | Continue as indicated See table S028 REAR NOISE (KNOCKING) [→939010108 S028 REAR NOISE (KNOCKING)] |
> Note: When carrying out Steps 14 to 19, steering in safe conditions to determine whether the noise is present especially when steering and whether it is more noticeable on one of the two sides.In the latter case, the subsequent checks should be carried out more carefully on the side in question.Also check that there are no transverse vibrations accompanied by noise. In this case, continue as indicatedSee table S019 FORECARRIAGE TRANSVERSE VIBRATIONS [→939008259 S019 FORECARRIAGE TRANSVERSE VIBRATIONS]

## 70C CHECK ON DOOR LOCK MICROSWITCHES  [939010337]
- Path: Test > 70 FITTINGS > 70C CHECK ON DOOR LOCK MICROSWITCHES
- Kind: test / check procedure
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010337

|  | CHECK TO BE PERFORMED | RESOLUTION IF THE CHECK IS NOT OK |
| --- | --- | --- |
| 1 | Disconnect the wiring connector from the front driver's door lock gear motor See N050 DRIVER'S FRONT DOOR LOCK GEARED MOTOR [→939004415] With the tester in Ohmmeter mode, connect the probes to the gear motor connector between Pins B and C See N050 DRIVER'S FRONT DOOR LOCK GEARED MOTOR [→939004415] Check that with the door closed the circuit is open and with the door open it is closed | Replace the door switch Op. 7005N20 FRONT SIDE DOOR LOCK MOTOR/CATCH ASSEMBLY, LEFT OR RIGHT - R.R WITH DOOR PANEL AND SUPPORT FRAME REMOVED [→939011147] |
| 2 | Disconnect the wiring connector from the front passenger door lock gear motor See N051 RIGHT FRONT DOOR LOCK GEARED MOTOR [→939004420] With the tester in Ohmmeter mode, connect the probes to the gear motor connector between Pins C and D See N051 RIGHT FRONT DOOR LOCK GEARED MOTOR [→939004420] Check that with the door closed the circuit is open and with the door open it is closed | Replace the door switch Op. 7005N20 FRONT SIDE DOOR LOCK MOTOR/CATCH ASSEMBLY, LEFT OR RIGHT - R.R WITH DOOR PANEL AND SUPPORT FRAME REMOVED [→939011147] |
| 3 | Disconnect the wiring connector from the left rear door lock gear motor See N055 LEFT REAR DOOR LOCK GEARED MOTOR [→939004425] With the tester in Ohmmeter mode, connect the probes to the gear motor connector between Pins B and C See N055 LEFT REAR DOOR LOCK GEARED MOTOR [→939004425] Check that with the door closed the circuit is open and with the door open it is closed | Replace the door switch Op. 7010N20 REAR SIDE DOOR LOCK MOTOR/CATCH ASSEMBLY - R.R. WITH DOOR PANEL AND SUPPORT FRAME REMOVED [→939011192] |
| 4 | Disconnect the wiring connector from the right rear door lock gear motor See N056 RIGHT REAR DOOR LOCK GEARED MOTOR [→939004427] With the tester in Ohmmeter mode, connect the probes to the gear motor connector between Pins C and D See N056 RIGHT REAR DOOR LOCK GEARED MOTOR [→939004427] Check that with the door closed the circuit is open and with the door open it is closed | Replace the door switch Op. 7010N20 REAR SIDE DOOR LOCK MOTOR/CATCH ASSEMBLY - R.R. WITH DOOR PANEL AND SUPPORT FRAME REMOVED [→939011192] |
| 5 | Disconnect the wiring connector from the boot opening switch **See I011 BOOT RELEASE SWITCH** With the tester in Ohmmeter mode, connect the probes to the switch connector between Pins 1 and 2. Check that with the tailgate closed the circuit is open and with the tailgate open it is closed Repeat the test by connecting between Pins 2 and 3, with the same result | Replace the boot switch Op. 7025B38 BOOT LID LOCK - R+R [→939011220] |
| 6 | Disconnect the wiring connector from the bonnect opening switch See I010 BONNET RELEASE SWITCH [→939004110] With the tester in Ohmmeter mode, connect the probes to the switch connector between Pins 1 and 2. See I010 BONNET RELEASE SWITCH [→939004110] Check that with the bonnet closed the circuit is open and with the bonnet open it is closed | Replace the bonnet switch |
| 7 | Check that the door, bonnet and boot microswitches are correcly earthed. See E7015 ALARM [→939011825] | Restore earth connections |

## 7005 PASSENGER COMPARTMENT FRONT SIDE DOORS  [939010338]
- Path: Test > 70 FITTINGS > 7005 PASSENGER COMPARTMENT FRONT SIDE DOORS
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010338
- Subtopics: 7005O PASSENGER COMPARTMENT FRONT SIDE DOOR TESTS [939010339]; 7005R FRONT DOOR MIRRORS [939010341]

## 7005O PASSENGER COMPARTMENT FRONT SIDE DOOR TESTS  [939010339]
- Path: Test > 70 FITTINGS > 7005 PASSENGER COMPARTMENT FRONT SIDE DOORS > 7005O PASSENGER COMPARTMENT FRONT SIDE DOOR TESTS
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010339
- Subtopics: 7005OA FRONT DOOR NOISE LOCALISATION [939010340]

## 7005OA FRONT DOOR NOISE LOCALISATION  [939010340]
- Path: Test > 70 FITTINGS > 7005 PASSENGER COMPARTMENT FRONT SIDE DOORS > 7005O PASSENGER COMPARTMENT FRONT SIDE DOOR TESTS > 7005OA FRONT DOOR NOISE LOCALISATION
- Kind: test / check procedure
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010340

Tape the various areas illustrated in the diagram using bodywork gummed paper.
[image: https://sloeber94.github.io/elrnDB/media/939003077.jpg]

Carry out a road test letting the vehicle gradually reach the speeds where the noise starts: if the wind noise persists, check for sealant between the wing and the pillar in the lower area.
Remove the gummed paper from area A and repeat the road test: if the wind noise persists, check the condition of the door housing seal in that area and make sure it adheres correctly to the bodyshell;
Op. 7005A34 FRONT SIDE DOOR COMPARTMENT SEAL - R.R [→939011114]
Also check the condition of the bonne hinge buffer.
Remove the gummed paper from area B and repeat the road test: if the wind noise persists, check the condition of the door housing seal in that area and make sure it adheres correctly to the bodyshell
Op. 7005A34 FRONT SIDE DOOR COMPARTMENT SEAL - R.R [→939011114]
Also adjust the door hinges
Op. 7005A14 FRONT SIDE DOOR - ADJUST CENTERING AND MOULDING - INCLUDES ADAPTATION OF HINGES AND SEALS ON DOOR COMPARTMENT [→939011112]
Remove the shims from the upper hinges or add some to the lower hinges so that the door and the seal fit together better.
Remove the gummed paper from area C and repeat the road test, if the wind noise persists, check the condition of the door housing seal in that area and make sure it adheres to the bodyshell correctly.
Op. 7005A34 FRONT SIDE DOOR COMPARTMENT SEAL - R.R [→939011114]
Remove or add shims from/to the two hinges so that the door and the seal fit together better.
Remove the gummed paper from area D and repeat the road test: if the wind noise persists, check the condition of the glass scraper.
Op. 7005D26 FRONT SIDE DESCENDING WINDOW GLASS SCRAPER (OUTER) (ONE), LEFT OR RIGHT- R.R [→939011131]
Remove the gummed paper from the rear view mirror area E and repeat the road test: if the wind noise persists, check the condition of the mirror seal.
Op. 7005R30 ELECTRICALLY CONTROLLED DOOR MIRROR (ONE) - R+R [→939011150]

## 7005R FRONT DOOR MIRRORS  [939010341]
- Path: Test > 70 FITTINGS > 7005 PASSENGER COMPARTMENT FRONT SIDE DOORS > 7005R FRONT DOOR MIRRORS
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010341
- Subtopics: 7005RA CHECK THE OPERATION OF THE DOOR MIRROR ADJUSTMENT CONTROL [939010342]

## 7005RA CHECK THE OPERATION OF THE DOOR MIRROR ADJUSTMENT CONTROL  [939010342]
- Path: Test > 70 FITTINGS > 7005 PASSENGER COMPARTMENT FRONT SIDE DOORS > 7005R FRONT DOOR MIRRORS > 7005RA CHECK THE OPERATION OF THE DOOR MIRROR ADJUSTMENT CONTROL
- Kind: test / check procedure
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010342

Left/right mirror selection and left/right/up/down mirror adjustment test.
1. Remove the control panel following the [PR_7005R40] on the driver's door and disconnect the connector.
2. Position the probes of an ohmmeter betwen pins 1 and 7 on the joystick connector and check for the following resistance values for both LH and RH mirror selections
3. Position the probes of an ohmmeter betwen pins 4 and 7 on the joystick connector and check for the following resistance values for both LH and RH mirror selections
4. Position the probes of an ohmmeter betwen pins 3 and 7 on the joystick connector and check for the following resistance values for the vertical up and down selection
| MOVEMENT | RESISTANCE VALUE | CONNECTOR PIN |
| --- | --- | --- |
| Left mirror selection | 218 Ohm 10% | 1 and 7 |
| Right mirror selection | 770 Ohm 10% | 1 and 7 |
| Left horizontal | 780 Ohm 10% | 4 and 7 |
| Right horizontal | 230 Ohm 10% | 4 and 7 |
| Vertical Up | 786 Ohm 10% | 3 and 7 |
| Vertical Down | 230 Ohm 10% | 3 and 7 |
[image: https://sloeber94.github.io/elrnDB/media/939003884.jpg]

## 7010 PASSENGER COMPARTMENT REAR SIDE DOORS  [939010343]
- Path: Test > 70 FITTINGS > 7010 PASSENGER COMPARTMENT REAR SIDE DOORS
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010343
- Subtopics: 7010O PASSENGER COMPARTMENT REAR SIDE DOOR TESTS [939010344]

## 7010O PASSENGER COMPARTMENT REAR SIDE DOOR TESTS  [939010344]
- Path: Test > 70 FITTINGS > 7010 PASSENGER COMPARTMENT REAR SIDE DOORS > 7010O PASSENGER COMPARTMENT REAR SIDE DOOR TESTS
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010344
- Subtopics: 7010OA REAR DOORS NOISE LOCALISATION [939010345]

## 7010OA REAR DOORS NOISE LOCALISATION  [939010345]
- Path: Test > 70 FITTINGS > 7010 PASSENGER COMPARTMENT REAR SIDE DOORS > 7010O PASSENGER COMPARTMENT REAR SIDE DOOR TESTS > 7010OA REAR DOORS NOISE LOCALISATION
- Kind: test / check procedure
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010345

Tape the various areas illustrated in the diagram using bodywork gummed paper.
[image: https://sloeber94.github.io/elrnDB/media/939003078.jpg]

Carry out a road test letting the vehicle gradually reach the speeds where the noise starts: if the wind noise persists, check for sealant between the wing and the pillar in the lower area.
Remove the gummed paper from area A and repeat the road test: if the wind noise persists, adjust the door hinges.
Op. 7010A14 REAR SIDE DOOR - ADJUST CENTERING AND MOULDING - INCLUDES ADAPTATION OF HINGES AND SEALS ON DOOR COMPARTMENT [→939011159]
Remove or add shims from/to the two hinges so that the door and the seal fit together better.
Remove the gummed paper from area B and repeat the road test: if the wind noise persists, adjust the door hinges.
Op. 7010A14 REAR SIDE DOOR - ADJUST CENTERING AND MOULDING - INCLUDES ADAPTATION OF HINGES AND SEALS ON DOOR COMPARTMENT [→939011159]
Remove or add shims from/to the two hinges so that the door and the seal fit together better.
Remove the gummed paper from area C and repeat the road test, if the wind noise persists, check the condition of the door housing seal in that area and make sure it adheres to the bodyshell correctly;
Op. 7010A34 REAR SIDE DOOR COMPARTMENT SEAL - R.R [→939011161]
Also check that the window sliding seal is correctly matched (with the window closed).
Remove the gummed paper from area D and repeat the road test: if the wind noise persists, check the condition of the glass scraper.
Op. 7010D26 REAR SIDE DESCENDING WINDOW GLASS SCRAPER (OUTER) (ONE), LEFT OR RIGHT - R.R [→939011179]

## 7025 COMPARTMENT COVERS  [939010346]
- Path: Test > 70 FITTINGS > 7025 COMPARTMENT COVERS
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010346
- Subtopics: 7025O COMPARTMENT LID TESTS [939010347]

## 7025O COMPARTMENT LID TESTS  [939010347]
- Path: Test > 70 FITTINGS > 7025 COMPARTMENT COVERS > 7025O COMPARTMENT LID TESTS
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010347
- Subtopics: 7025OA BONNET NOISE LOCALISATION [939010348]

## 7025OA BONNET NOISE LOCALISATION  [939010348]
- Path: Test > 70 FITTINGS > 7025 COMPARTMENT COVERS > 7025O COMPARTMENT LID TESTS > 7025OA BONNET NOISE LOCALISATION
- Kind: test / check procedure
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010348

Tape the various areas illustrated in the diagram using bodywork gummed paper.
[image: https://sloeber94.github.io/elrnDB/media/939003079.jpg]

Carry out a road test letting the vehicle gradually reach the speeds where the noise starts: if the wind noise persists, check that the plugs are present and that the rubber cable ducts in the fire-proof partition are correctly fitted.
Remove the gummed paper from area A and repeat the road test: if the wind noise persists, check the buffers where the bonnet and the wings match at the rear.
Remove the gummed paper from area B and repeat the road test: if the wind noise persists, check the condition of the front weatherstip and make sure it is correctly fitted (it should adhere perfectly to the crossmember when the bonnet is closed).
Op. 7025A62 BONNET LID WEATHERSTRIP - R+R [→939011208]

## 7035 BODY WINDOW GLASSES  [939010349]
- Path: Test > 70 FITTINGS > 7035 BODY WINDOW GLASSES
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010349
- Subtopics: 7035A WINDSCREEN [939010350]; 7035O GLASS TESTS ON BODY AND WINDOWS [939010352]

## 7035A WINDSCREEN  [939010350]
- Path: Test > 70 FITTINGS > 7035 BODY WINDOW GLASSES > 7035A WINDSCREEN
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010350
- Subtopics: 7035AA WINDSCREEN NOISE LOCALISATION [939010351]

## 7035AA WINDSCREEN NOISE LOCALISATION  [939010351]
- Path: Test > 70 FITTINGS > 7035 BODY WINDOW GLASSES > 7035A WINDSCREEN > 7035AA WINDSCREEN NOISE LOCALISATION
- Kind: test / check procedure
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010351

Tape the various areas illustrated in the diagram using bodywork gummed paper.
[image: https://sloeber94.github.io/elrnDB/media/939003080.jpg]

Carry out a road test letting the vehicle gradually reach the speeds where the noise starts: if the wind noise persists, check that the windscreen has been correctly taped and also check whether the source of the wind noise might be coming from the area of the sun roof.
Remove the gummed paper from area A and repeat the road test: if the wind noise persists, locate the wind noise in the area of the front doors
**Op. 7005OA FRONT DOOR NOISE LOCALISATION**
Remove the gummed paper from area B (window only) and check the condition of the window moulding trim (no wrinkles or creases). Replace the moulding if necessary, removing the window.
Op. 7035A18 WINDSCREEN GLASS - R.R INCLUDING CLEANING HOUSING [→939011347]

## 7035O GLASS TESTS ON BODY AND WINDOWS  [939010352]
- Path: Test > 70 FITTINGS > 7035 BODY WINDOW GLASSES > 7035O GLASS TESTS ON BODY AND WINDOWS
- Kind: chapter (index of subtopics)
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010352
- Subtopics: 7035OA Check fixed window glass penetration (windscreen and rearscreen) [939010353]

## 7035OA Check fixed window glass penetration (windscreen and rearscreen)  [939010353]
- Path: Test > 70 FITTINGS > 7035 BODY WINDOW GLASSES > 7035O GLASS TESTS ON BODY AND WINDOWS > 7035OA Check fixed window glass penetration (windscreen and rearscreen)
- Kind: test / check procedure
- Applies to: all engines; all production periods
- Web: https://sloeber94.github.io/elrnDB/#/939010353

Apply a solution of soapy water to the entire perimeter of the glass.
From inside the passenger compartment, blow through with compressed air along the entire perimeter, moving the trims to the side and the top, if necessary.
[image: https://sloeber94.github.io/elrnDB/media/939003478.jpg]
Visually inspect for any bubbles of air on the outer surface: this makes it possible to locate any areas where the sealant is not sufficient or damaged.
If there is a lack of sealant on the vertical pillars, the pillar trim can be moved and rubber type sealant can be injected from the inside.
If there is a lack of sealant on the top section, the roof lining can be moved and rubber type sealant can be injected from the inside.
If there is a lack of sealant on the bottom section, the trim at the base of the (front) windscreen or the rear parcel shelf (for the rearscreen) can be moved and rubber type sealant can be injected from the inside.
If there is insufficient sealant in widespread areas, the overall seal of the window cannot be guaranteed and therefore it has to be removed and the windscreen or the rearscreen must be completely resealed.
Op. 7035A18 WINDSCREEN GLASS - R.R INCLUDING CLEANING HOUSING [→939011347]
