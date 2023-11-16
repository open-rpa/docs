---
layout: default
title: ElisRossum Activities
parent: OpenRPA Activities
---
## OpenRPA.ElisRossum Activities

### Authenticate User into Rossum Platform

Authenticate into the Rossum Platform using Rossum credentials and save the JWT token to a variable. Requires a configured account.

- **Properties Parameters**
  - `DisplayName`: Title of the activity in the sequence.
  - `Password`: Password for the Rossum credentials.
  - `Result`: Variable for saving the JWT token.
  - `Username`: Username for the Rossum credentials.

![OpenRPA.ElisRossum Auth](../../images/openrpa_elis_rossum_auth.png)

### Export File Data from Rossum Platform

Export data from the Rossum Platform annotation into a variable. Requires a JWT token and a Rossum Platform queue initialized into a variable.

- **Properties Box**
  - `DisplayName`: Title of the activity in the sequence.
  - `Fileurl`: URL for the Rossum Platform annotation.
  - `Key`: JWT token from the Auth Activity.
  - `Queue`: URL attribute for the queue.
  - `Result`: Variable for saving acquired data.

![OpenRPA.ElisRossum Export File Data](../../images/openrpa_elis_rossum_export_file_data.png)

### Get File Status on Rossum Platform

Gather the status of a Rossum Platform annotation and save it to a variable.

- **Properties Parameters**
  - `DisplayName`: Title of the activity in the sequence.
  - `Fileurl`: URL for the Rossum Platform annotation.
  - `Key`: JWT token from the Auth Activity.
  - `Result`: Variable for the status.

![OpenRPA.ElisRossum Get File Status](../../images/openrpa_elis_rossum_get_file_status.png)

### Acquire Queues from Rossum Platform

Acquire all queues from the Rossum Platform and save them to a variable. Requires a JWT token.

- **Properties Parameters**
  - `DisplayName`: Title of the activity in the sequence.
  - `Key`: JWT token from the Auth Activity.
  - `Results`: Variable for the Queues[].

![OpenRPA.ElisRossum Get Queue](../../images/openrpa_elis_rossum_get_queue.png)

### Upload File to Rossum Platform

Upload a file to a Rossum Platform queue and save the resulting URL.

- **Properties Parameters**
  - `DisplayName`: Title of the activity in the sequence.
  - `Filename`: Absolute filepath of the file to upload.
  - `Key`: JWT token from the Auth Activity.
  - `Queue`: URL attribute for the queue.
  - `Result`: Variable for the URL of the uploaded document.

![OpenRPA.ElisRossum Upload File](../../images/openrpa_elis_rossum_upload_file.png)

### Wait for File Status on Rossum Platform

Set workflow status to idle until the file status matches the provided status.

- **Properties Box**
  - `DisplayName`: Title of the activity in the sequence.
  - `Fileurl`: URL for the Rossum Platform annotation.
  - `Key`: JWT token from the Auth Activity.
  - `Result`: Variable for the file status.
  - `Status`: Status to match against.
  - `Timeout`: Time interval to wait for status match.

![OpenRPA.ElisRossum Wait for File Status](../../images/openrpa_elis_rossum_wait_for_file_status.png)
