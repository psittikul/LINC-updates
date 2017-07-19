<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <title>LINC Client Tracking</title>
        <link rel = "stylesheet" type="text/css" href="clientUpdates.css"/>
        <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Ubuntu:regular">
        <script type="text/javascript" src="clientUpdates.js"></script>
    </head>
    <body>
        <h2>Client Tracking</h2>
        <h4>CT Clients</h4>
        <button type="button" id="addClientButton" onclick="addCTClient()">Add Client</button>
        <div class = "clientSection">
            <table class = "clientTable" id="CT_Client_Table">
                <tbody>
                    <thead>
                        <th style="width: 5%;">Bag?</th>
                        <th>Client Name</th>
                        <th>Spouse Name</th>
                        <th>Service</th>
                        <th style="width: 8%;">Hours</th>
                        <th style="width:">Intake Date</th>
                        <th>Notes</th>
                        <th>June</th>
                        <th>July</th>
                        <th>August</th>
                        <th>September</th>
                    </thead>
                    <tr>
                        <td style="text-align: center;"><input type="checkbox" name="bagDelivered" class="checkBox" id="bagCheckbox"></td>
                        <td><input type="text" name="clientName"></td>
                        <td><input type="text" name="spouseName"></td>
                        <td><select name="service" id="serviceSelect">
                            <option>---</option>
                            <option>CT</option>
                            <option>CT Add-on</option>
                            <option>DC Add-on</option>
                            <option>DC</option>
                            <option>RA</option>
                            </select>
                        </td>
                        <td class="hoursCell"><input type="number" name="hours" class="hoursField" id="hoursCell"></td>
                        <td><input type="date" name="intakeDate" class="intakeField" id="intakeCell"></td>
                        <td><textarea cols = "30" rows = "3" id="notesField"></textarea></td>
                        <td>
                            <select onchange="colorStatus()" name="statusJune" id="statusCell">
                                <option>---</option>
                                <option>Active</option>
                                <option>Closing</option>
                                <option>Deferred</option>
                            </select>
                        </td>
                        <td>
                            <select onchange="colorStatus()" name="statusJuly">
                                <option>---</option>
                                <option>Active</option>
                                <option>Closing</option>
                                <option>Deferred</option>
                            </select>
                        </td>
                        <td>
                            <select onchange="colorStatus()" name="statusAugust">
                                <option>---</option>
                                <option>Active</option>
                                <option>Closing</option>
                                <option>Deferred</option>
                            </select>
                        </td>
                        <td>
                            <select onchange="colorStatus()" name="statusSeptember">
                                <option>---</option>
                                <option>Active</option>
                                <option>Closing</option>
                                <option>Deferred</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button type="button" id="updateButton" onclick="updateClientInfo()">Update</button>
        </div>
    </body>
</html>