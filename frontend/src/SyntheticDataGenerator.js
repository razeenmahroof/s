import React, { useState, useRef, useEffect } from 'react';
import { AppBar, Dialog, DialogContent, DialogTitle, IconButton, Toolbar, Container, Button, Tabs, Tab, Typography, TextField, Grid, Box, Card, CardContent, FormControlLabel, Checkbox, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Tooltip, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import api from './api';
import Papa from 'papaparse';
import * as XLSX from 'xlsx'; // Import xlsx library
import uploadImg from "./Assets/icons/Upload.svg";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Loader from './Loader';
import Avatar from '@mui/material/Avatar';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DownloadIcon from '@mui/icons-material/Download';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { ToastContainer, toast } from 'react-toastify'; // Add import
import 'react-toastify/dist/ReactToastify.css'; // Add import for styles
import CircularProgress from '@mui/material/CircularProgress';
import AdditionalInstructionPopup from './AdditionalInstructionPopup.js';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import xmlFormatter from 'xml-formatter';
import CloseIcon from '@mui/icons-material/Close';
import HistoryTable from './HistoryTable';
import CsvTableComponent from './TableComponsnet';

function SyntheticDataGenerator() {
  // const [fullResult,setFullResult] = useState([{'request': 'serviceType,clientId,productId,clientReferenceId,primaryApplicant_lastName,primaryApplicant_firstName,primaryApplicant_middleName,primaryApplicant_generationCode,primaryApplicant_dob,primaryApplicant_ssn,primaryApplicant_currentAddress_line1,primaryApplicant_currentAddress_line2,primaryApplicant_currentAddress_city,primaryApplicant_currentAddress_state,primaryApplicant_currentAddress_zipCode,subscriberCode,PermissiblePurpose,additionalAttributes1_id,additionalAttributes1_value,additionalAttributes2_id,additionalAttributes2_value,additionalAttributes3_id,additionalAttributes3_value,additionalAttributes4_id,additionalAttributes4_value,additionalAttributes5_id,additionalAttributes5_value,additionalAttributes6_id,additionalAttributes6_value,additionalAttributes7_id,additionalAttributes7_value,additionalAttributes8_id,additionalAttributes8_value,additionalAttributes9_id,additionalAttributes9_value,additionalAttributes10_id,additionalAttributes10_value,additionalAttributes11_id,additionalAttributes11_value,additionalAttributes12_id,additionalAttributes12_value,additionalAttributes13_id,additionalAttributes13_value,additionalAttributes14_id,additionalAttributes14_value,additionalAttributes15_id,additionalAttributes15_value,additionalAttributes16_id,additionalAttributes16_value,additionalAttributes17_id,additionalAttributes17_value,additionalAttributes18_id,additionalAttributes18_value,additionalAttributes19_id,additionalAttributes19_value,additionalAttributes20_id,additionalAttributes20_value', 'response1': 'serviceContextId,data_Response_additionalAttributes_id,data_Response_additionalAttributes_value,data_Response_clientId,data_Response_clientReferenceId,data_Response_decisionResults_productDecision_decisionCategory,data_Response_decisionResults_productDecision_decisionName,data_Response_decisionResults_productDecision_policyRuleSet_policyRule,data_Response_decisionResults_productDecision_policyRuleSet_reasonCode,data_Response_decisionResults_productDecisionCount,data_Response_decisionResults_randomNumbers,data_Response_expCreditProfile_addressInformation_city,data_Response_expCreditProfile_addressInformation_dwellingType,data_Response_expCreditProfile_addressInformation_firstReportedDate,data_Response_expCreditProfile_addressInformation_lastReportingSubscriberCode,data_Response_expCreditProfile_addressInformation_lastUpdatedDate,data_Response_expCreditProfile_addressInformation_source,data_Response_expCreditProfile_addressInformation_state,data_Response_expCreditProfile_addressInformation_streetName,data_Response_expCreditProfile_addressInformation_streetPrefix,data_Response_expCreditProfile_addressInformation_streetSuffix,data_Response_expCreditProfile_addressInformation_timesReported,data_Response_expCreditProfile_addressInformation_zipCode,data_Response_expCreditProfile_consumerIdentity_name_firstName,data_Response_expCreditProfile_consumerIdentity_name_middleName,data_Response_expCreditProfile_consumerIdentity_name_surname,data_Response_expCreditProfile_consumerIdentity_name_type,data_Response_fcraAttributes_addressMismatch,data_Response_fcraAttributes_xfc01,data_Response_fcraAttributes_xfc02,data_Response_fcraAttributes_xfc03,data_Response_fcraAttributes_xfc04,data_Response_fcraAttributes_xfc05,data_Response_fcraAttributes_xfc06,data_Response_fcraAttributes_xfc07,data_Response_headerRecord_mKeywordText,data_Response_headerRecord_reportDate,data_Response_headerRecord_reportTime,data_Response_informationalMessage_messageNumber,data_Response_informationalMessage_messageText,data_Response_ops_transaction_id,data_Response_premierAttributes_version,data_Response_riskModel_evaluation,data_Response_riskModel_modelIndicator,data_Response_riskModel_score,data_Response_riskModel_scoreFactors_code,data_Response_riskModel_scoreFactors_importance,data_Response_productId,data_Response_transactionId,data_Response_tty_ttyResponse', 'response2': 'serviceContextId,data_Response_additionalAttributes_id,data_Response_additionalAttributes_value,data_Response_clientId,data_Response_clientReferenceId,data_Response_decisionResults_productDecision_decisionCategory,data_Response_decisionResults_productDecision_decisionName,data_Response_decisionResults_productDecision_policyRuleSet_policyRule,data_Response_decisionResults_productDecision_policyRuleSet_reasonCode,data_Response_decisionResults_productDecisionCount,data_Response_decisionResults_randomNumbers,data_Response_expCreditProfile_addressInformation_city,data_Response_expCreditProfile_addressInformation_dwellingType,data_Response_expCreditProfile_addressInformation_firstReportedDate,data_Response_expCreditProfile_addressInformation_lastReportingSubscriberCode,data_Response_expCreditProfile_addressInformation_lastUpdatedDate,data_Response_expCreditProfile_addressInformation_source,data_Response_expCreditProfile_addressInformation_state,data_Response_expCreditProfile_addressInformation_streetName,data_Response_expCreditProfile_addressInformation_streetPrefix,data_Response_expCreditProfile_addressInformation_streetSuffix,data_Response_expCreditProfile_addressInformation_timesReported,data_Response_expCreditProfile_addressInformation_zipCode,data_Response_expCreditProfile_consumerIdentity_name_firstName,data_Response_expCreditProfile_consumerIdentity_name_middleName,data_Response_expCreditProfile_consumerIdentity_name_surname,data_Response_expCreditProfile_consumerIdentity_name_type,data_Response_fcraAttributes_addressMismatch,data_Response_fcraAttributes_xfc01,data_Response_fcraAttributes_xfc02,data_Response_fcraAttributes_xfc03,data_Response_fcraAttributes_xfc04,data_Response_fcraAttributes_xfc05,data_Response_fcraAttributes_xfc06,data_Response_fcraAttributes_xfc07,data_Response_headerRecord_mKeywordText,data_Response_headerRecord_reportDate,data_Response_headerRecord_reportTime,data_Response_informationalMessage_messageNumber,data_Response_informationalMessage_messageText,data_Response_ops_transaction_id,data_Response_premierAttributes_version,data_Response_riskModel_evaluation,data_Response_riskModel_modelIndicator,data_Response_riskModel_score,data_Response_riskModel_scoreFactors_code,data_Response_riskModel_scoreFactors_importance,data_Response_productId,data_Response_transactionId,data_Response_tty_ttyResponse', 'response3': 'serviceContextId,data_Response_additionalAttributes_id,data_Response_additionalAttributes_value,data_Response_clientId,data_Response_clientReferenceId,data_Response_decisionResults_productDecision_decisionCategory,data_Response_decisionResults_productDecision_decisionName,data_Response_decisionResults_productDecision_policyRuleSet_policyRule,data_Response_decisionResults_productDecision_policyRuleSet_reasonCode,data_Response_decisionResults_productDecisionCount,data_Response_decisionResults_randomNumbers,data_Response_expCreditProfile_addressInformation_city,data_Response_expCreditProfile_addressInformation_dwellingType,data_Response_expCreditProfile_addressInformation_firstReportedDate,data_Response_expCreditProfile_addressInformation_lastReportingSubscriberCode,data_Response_expCreditProfile_addressInformation_lastUpdatedDate,data_Response_expCreditProfile_addressInformation_source,data_Response_expCreditProfile_addressInformation_state,data_Response_expCreditProfile_addressInformation_streetName,data_Response_expCreditProfile_addressInformation_streetPrefix,data_Response_expCreditProfile_addressInformation_streetSuffix,data_Response_expCreditProfile_addressInformation_timesReported,data_Response_expCreditProfile_addressInformation_zipCode,data_Response_expCreditProfile_consumerIdentity_name_firstName,data_Response_expCreditProfile_consumerIdentity_name_middleName,data_Response_expCreditProfile_consumerIdentity_name_surname,data_Response_expCreditProfile_consumerIdentity_name_type,data_Response_fcraAttributes_addressMismatch,data_Response_fcraAttributes_xfc01,data_Response_fcraAttributes_xfc02,data_Response_fcraAttributes_xfc03,data_Response_fcraAttributes_xfc04,data_Response_fcraAttributes_xfc05,data_Response_fcraAttributes_xfc06,data_Response_fcraAttributes_xfc07,data_Response_headerRecord_mKeywordText,data_Response_headerRecord_reportDate,data_Response_headerRecord_reportTime,data_Response_informationalMessage_messageNumber,data_Response_informationalMessage_messageText,data_Response_ops_transaction_id,data_Response_premierAttributes_version,data_Response_riskModel_evaluation,data_Response_riskModel_modelIndicator,data_Response_riskModel_score,data_Response_riskModel_scoreFactors_code,data_Response_riskModel_scoreFactors_importance,data_Response_productId,data_Response_transactionId,data_Response_tty_ttyResponse'}])
  const [file, setFile] = useState(null);
  const [fullResult, setFullResult] = useState([])
  const [extra, setExtra] = useState(null);
  const [templateRequest, setTemplateRequest] = useState(null);
  const [templateResponse, setTemplateResponse] = useState(null);
  const [requests, setRequests] = useState([]);
  const [responses, setResponses] = useState([]);
  const [runs, setRuns] = useState(5);
  const [loading, setLoading] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [filePreview, setFilePreview] = useState(null);
  const [extraPreview, setExtraPreview] = useState(null);
  const [requestTemplatePreview, setRequestTemplatePreview] = useState(null);
  const [responseTemplatePreview, setResponseTemplatePreview] = useState(null);
  const [errors, setErrors] = useState([]);
  const [filesUploaded, setFilesUploaded] = useState(false);
  const fileInputRef = useRef(null);
  const extraInputRef = useRef(null);
  const requestTemplateInputRef = useRef(null);
  const responseTemplateInputRef = useRef(null);
  const [showResults, setShowResults] = useState(false);
  const [resultsAvailable, setResultsAvailable] = useState(false);
  const [isSeedModalOpen, setSeedModalOpen] = useState(false);
  const [outputFormat, setOutputFormat] = useState('json');
  const [open, setOpen] = useState(false);
  const [historyData, setHistoryData] = useState([]);
  const [output, setOutput] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [generationMode, setGenerationMode] = useState("json")

  const handleOpen = () => {
    setOpen(true);
    fetchLatestJob();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchLatestJob = async () => {
    try {
      setIsLoading(true);
      const response = await api.get('/latestJob');
      console.log(response)
      const data = response.data;
      console.log(data)
      setHistoryData(data); // Wrap in array as there might be multiple records in the future
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching latest job:', error);
    }
  };

  const handleOpenSeedModal = () => setSeedModalOpen(true);
  const handleCloseSeedModal = () => setSeedModalOpen(false);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const uploadAllFiles = async () => {
    if (!templateRequest || !templateResponse) {
      setErrors(['Please upload all required files before uploading.']);
      return;
    }

    setLoading(true);
    setErrors([]);

    try {
      const formData = new FormData();
      if (file) {
        formData.append('AddtnlInfo', file);
      }



      formData.append('request_template', templateRequest);
      formData.append('response_template', templateResponse);

      if (extra) {
        formData.append('extra_file', extra);
      }
      const mimeType1 = templateRequest.type;
      const mimeType2 = templateResponse.type;
      if ((mimeType1 === 'text/csv' || templateRequest.name.split('.').pop().toLowerCase() === 'csv') &&
        (mimeType2 === 'text/csv' || templateResponse.name.split('.').pop().toLowerCase() === 'csv')) {
        console.log('Both files are CSV');
        
      await api.post('/uploadcsv', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log('All files uploaded successfully');
      toast.success(
        'Files successfully uploaded'
        );
      // You might want to set a state variable here to indicate successful upload
      setFilesUploaded(true);
      }
      // If both files are JSON
      else if ((mimeType1 === 'application/json' || templateRequest.name.split('.').pop().toLowerCase() === 'json') &&
        (mimeType2 === 'application/json' || templateResponse.name.split('.').pop().toLowerCase() === 'json')) {
        setGenerationMode("json")

        await api.post('/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('All files uploaded successfully');
        toast.success(
          'Files successfully uploaded'
        );
        // You might want to set a state variable here to indicate successful upload
        setFilesUploaded(true);

      }
      // If both files are not of the same type
      else {
        console.log('Both files should be the same format');
        // Display a toast or error message
        alert('Both files should be in the same format (either both CSV or both JSON)');
      }
    } catch (error) {
      console.error('Error uploading files:', error);
      toast.warn(
        'Uploading failed'
      );
      setErrors(['Failed to upload files']);
    } finally {
      setLoading(false);
    }
  };


  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    const fileType = file.type;

    if (fileType === 'application/json') {
      const reader = new FileReader();

      reader.onload = () => {
        const jsonData = JSON.parse(reader.result);
        if (type === 'seed') {
          setFile(file);
          setFilePreview(JSON.stringify(jsonData, null, 2));
        } else if (type === 'extra') {
          setExtra(file);
          setExtraPreview(JSON.stringify(jsonData, null, 2));
        } else if (type === 'requestTemplate') {
          setTemplateRequest(file);
          setRequestTemplatePreview(JSON.stringify(jsonData, null, 2));
        } else if (type === 'responseTemplate') {
          setTemplateResponse(file);
          setResponseTemplatePreview(JSON.stringify(jsonData, null, 2));
        }
        setFilesUploaded(false);
      };

      reader.readAsText(file);
    }else if (fileType === 'text/csv') {
      const reader = new FileReader();
    
      reader.onload = () => {
        const csvData = reader.result;
        
        // You can use PapaParse to parse the CSV data into an array of objects or arrays
       
            if (type === 'seed') {
              setFile(file);
              setFilePreview(csvData);
            } else if (type === 'extra') {
              setExtra(file);
              setExtraPreview(csvData);
            } else if (type === 'requestTemplate') {
              setTemplateRequest(file);
              setRequestTemplatePreview(csvData);
            } else if (type === 'responseTemplate') {
              setTemplateResponse(file);
              setResponseTemplatePreview(csvData);
            }
            setFilesUploaded(false);
          
      };
    
      reader.readAsText(file);
    }
     else if (fileType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || fileType === 'application/vnd.ms-excel') {
      const reader = new FileReader();

      reader.onload = () => {
        const data = new Uint8Array(reader.result);
        const workbook = XLSX.read(data, { type: 'array' });

        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        if (type === 'seed') {
          setFile(file);
          setFilePreview(JSON.stringify(jsonData, null, 2));
        } else if (type === 'extra') {
          setExtra(file);
          setExtraPreview(JSON.stringify(jsonData, null, 2));
        } else if (type === 'requestTemplate') {
          setTemplateRequest(file);
          setRequestTemplatePreview(JSON.stringify(jsonData, null, 2));
        } else if (type === 'responseTemplate') {
          setTemplateResponse(file);
          setResponseTemplatePreview(JSON.stringify(jsonData, null, 2));
        }
      };

      reader.readAsArrayBuffer(file);
    } else {
      alert('Unsupported file type');
    }
  };

  const handleGenerate = async () => {
    if (!filesUploaded) {
      setErrors(['Please upload all files before generating.']);
      return;
    }

    setLoading(true);
    setErrors([]);
    setResultsAvailable(false); // Initially, results are not available

    const payload = {
      "runs": runs,
      "output_format": outputFormat
    };

    try {
      // Step 1: Start the async task by sending a POST request
      const response = await api.post('/generate',{params:{
        "mode":generationMode
      }}, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // const { job_id } = response.data;
      console.log('Generation process started', response.data);
      setFullResult(prevFullResult => ([...prevFullResult,...response.data.data]))  
    // setRequests(response.data.map(item => item.request));
      // setResponses(response.data.map(item => item.response));
      setResultsAvailable(true);
      setLoading(false);
      // setOutput(response.data.unique_folder)
      toast.success('Data generated successfully!');

      console.log(fullResult)

      // Step 2: Poll the backend to check the status of the async task
      // pollForResult(job_id, outputFormat);

    } catch (error) {
      console.error('Error starting generation process:', error);
      handleRequestError(error);
    }
  };

  const pollForResult = async (jobId, format) => {
    const interval = 12000; // Poll every 5 seconds
    const maxAttempts = 50; // Stop polling after 1 minute (12 * 5 seconds)
    let attempts = 0;

    const poll = setInterval(async () => {
      attempts++;

      try {
        const endpoint = format === 'json' ? `/json-data?job_id=${jobId}` : `/xml-data?job_id=${jobId}`;
        const response = await api.get(endpoint);

        if (response.status === 200) {
          console.log(response.data)
          const data = response.data;

          if (data.status === 'completed') {
            clearInterval(poll);
            setRequests(data.sampleData.map(item => item.request));
            setResponses(data.sampleData.map(item => item.response));
            setResultsAvailable(true);
            setLoading(false);
            setOutput(data.unique_folder)
            toast.success('Data generated successfully!');
          }
        } else if (response.status === 202) {
          console.log('Task still processing...');
        } else {
          console.error('Unexpected response:', response);
          clearInterval(poll);
          setErrors(['Unexpected response from server.']);
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          // Handle 404 error gracefully - continue polling
          console.log('Job result not found yet, retrying...');
        } else {
          console.error('Error polling job result:', error);
          clearInterval(poll);
          setErrors(['Error polling job result.']);
        }
      }

      if (attempts >= maxAttempts) {
        clearInterval(poll);
        // Fallback: Stop polling and handle timeout case
        setErrors(['The generation process is taking longer than expected. Please try again later.']);
      }
    }, interval);
  };


  const handleRequestError = (error) => {
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
      setErrors([`Generation process failed: ${error.response.data.message || 'Unknown error'}`]);
    } else if (error.request) {
      console.error('No response received:', error.request);
      setErrors(['No response received from server']);
    } else {
      console.error('Error setting up request:', error.message);
      setErrors([`Error setting up request: ${error.message}`]);
    }
    setLoading(false);
  };


  const handleDownload = async () => {
    try {
      // Step 1: Get the response from the backend API to retrieve the pre-signed URL
      const response = await api.get('/download'); // Replace with your actual API endpoint

      if (response.status !== 200) {
        throw new Error('Failed to get the pre-signed URL.');
      }

      const { download_url } = response.data; // Extract the pre-signed URL from the response
      console.log('Received Pre-Signed URL:', download_url);

      const link = document.createElement('a');
      link.href = download_url; // Use the pre-signed URL
      link.setAttribute('download', 'outputs.zip'); // Optional, browsers should handle this automatically
      document.body.appendChild(link);
      link.click();
      link.remove();

    } catch (error) {
      console.error('Error downloading selected output:', error);
      // Handle error (e.g., show an error message to the user)
    }
  };


  return (
    <>
      <AppBar position="static" style={{ backgroundColor: "white", color: "#0097AB", height: "50px" }}>
        <Toolbar style={{ height: "49px", width: "100%" }}>
          <AccountTreeIcon />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 }}>
            Synthetic Data Generator
          </Typography>
          <Typography variant="subtitle1" sx={{ mr: 2, color: "grey" }}>
            John Doe
          </Typography>
          <Avatar sx={{ width: 24, height: 24, fontSize: "16px" }}>H</Avatar>
        </Toolbar>
      </AppBar>
      <Container style={{ maxWidth: "1445px" }}>
        <Box mt={2}>
          <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
            {/* Tabs */}
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              aria-label="upload tabs"
              TabIndicatorProps={{ style: { display: 'none' } }} // Remove the indicator line
            >
              {/* <Tab 
            style={{backgroundColor:"#0097AB", color:"white", border:"solid", height: "36px", minHeight: "36px", padding: "0 12px"}} 
            label={
              <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                Seed File &nbsp; &nbsp; &nbsp;<ArrowForwardIosIcon style={{ fontSize: "16px" }} />
              </Box>
            } 
          /> */}
              <Tab
                style={{ backgroundColor: "#0097AB", color: "white", border: "solid", height: "36px", minHeight: "36px", padding: "0 12px" }}
                label={
                  <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                    Strategy Rule File &nbsp; &nbsp; &nbsp;<ArrowForwardIosIcon style={{ fontSize: "16px" }} />
                  </Box>
                }
              />
              <Tab
                style={{ backgroundColor: "#0097AB", color: "white", border: "solid", height: "36px", minHeight: "36px", padding: "0 12px" }}
                label={
                  <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                    Template Files &nbsp; &nbsp; &nbsp;<ArrowForwardIosIcon style={{ fontSize: "16px" }} />
                  </Box>
                }
              />
            </Tabs>

            {/* Wrap buttons in a Box to control spacing */}
            <Box display="flex" alignItems="center" gap="10px">

              <Button
                style={{ fontSize: "12px", minWidth: "10em", backgroundColor: "#fff", border: "1px solid #0097ab", color: "#0097ab" }}
                onClick={handleOpenSeedModal}>
                Additional Instructions
              </Button>
              <AdditionalInstructionPopup
                open={isSeedModalOpen}
                handleClose={handleCloseSeedModal}
                seedContent={

                  <TabPanel  >
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <UploadBox
                          filePreview={filePreview}
                          fileInputRef={fileInputRef}
                          onFileChange={(e) => handleFileChange(e, 'seed')}
                          label="Seed File Upload"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <PreviewBox heading="Additional Instructions Preview" content={filePreview} />
                      </Grid>
                    </Grid>
                  </TabPanel>

                }></AdditionalInstructionPopup>
              <Button
                style={{ fontSize: "12px", minWidth: "10em", opacity: resultsAvailable ? 1 : 0.2, backgroundColor: "#fff", border: "1px solid #0097ab", color: "#0097ab" }}
                onClick={() => setShowResults(!showResults)}
                disabled={!resultsAvailable}
              >
                {showResults ? "Hide Results" : "Generated Result"}
              </Button>
              {/* <Button
                style={{ fontSize: "12px", minWidth: "10em", backgroundColor: "#fff", border: "1px solid #0097ab", color: "#0097ab" }}
                onClick={handleOpen}
              >
                History
              </Button> */}
              <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth="md"
              >
                <DialogTitle>
                  History
                  <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                      position: 'absolute',
                      right: 8,
                      top: 8,
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </DialogTitle>
                <DialogContent>
                  <HistoryTable data={historyData} isLoading={isLoading} />
                </DialogContent>
              </Dialog>
            </Box>
          </Box>

          {!showResults && (
            <Box>
              {/* <TabPanel value={tabValue} index={0}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <UploadBox
                  filePreview={filePreview}
                  fileInputRef={fileInputRef}
                  onFileChange={(e) => handleFileChange(e, 'seed')}
                  label="Seed File Upload"
                />
              </Grid>
              <Grid item xs={6}>
                <PreviewBox heading="Seed Data Preview" content={filePreview} />
              </Grid>
            </Grid>
          </TabPanel> */}
              <TabPanel value={tabValue} index={0}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      label="Number of Records"
                      type="number"
                      value={runs}
                      onChange={(e) => setRuns(e.target.value)}
                      variant="outlined"
                      InputProps={{ inputProps: { min: 1 } }}
                      fullWidth
                      margin="normal"
                    />
                    {/* <FormControlLabel
                  control={<Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />}
                  label="Include Instruction File"
                /> */}
                    <UploadBox
                      filePreview={extraPreview}
                      fileInputRef={extraInputRef}
                      onFileChange={(e) => handleFileChange(e, 'extra')}
                      label="Instruction File Upload"
                    />
                    <ToggleButtonGroup
                      value={outputFormat}
                      exclusive
                      onChange={(e, newFormat) => {
                        if (newFormat !== null) setOutputFormat(newFormat);
                      }}
                      aria-label="output format"
                    >
                      <ToggleButton value="json" aria-label="JSON format">
                        JSON
                      </ToggleButton>
                      <ToggleButton value="xml" aria-label="XML format">
                        XML
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </Grid>
                  <Grid item xs={6}>
                    <PreviewBox heading="Strategy Rule File Preview" content={extraPreview} />
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={tabValue} index={1}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <UploadBox
                      filePreview={requestTemplatePreview}
                      fileInputRef={requestTemplateInputRef}
                      onFileChange={(e) => handleFileChange(e, 'requestTemplate')}
                      label="Request Template File Upload"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <UploadBox
                      filePreview={responseTemplatePreview}
                      fileInputRef={responseTemplateInputRef}
                      onFileChange={(e) => handleFileChange(e, 'responseTemplate')}
                      label="Response Template File Upload"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <PreviewBox heading="Request Template Preview" content={requestTemplatePreview} />
                  </Grid>
                  <Grid item xs={6}>
                    <PreviewBox heading="Response Template Preview" content={responseTemplatePreview} />
                  </Grid>
                </Grid>
              </TabPanel>
            </Box>
          )}
        </Box>

        {!showResults && (
          <Box mt={1} textAlign="center" display="flex" justifyContent="flex-end" gap="5px">
            {!loading && (
              <>
                <Button
                  style={{ fontSize: "12px", minWidth: "10em", backgroundColor: "#fff", border: "1px solid #0097ab", color: "#0097ab" }}
                  onClick={uploadAllFiles}
                  disabled={loading || (!templateRequest || !templateResponse)}
                >
                  Upload
                </Button>
                <Button
                  style={{ fontSize: "12px", minWidth: "10em", backgroundColor: "#fff", border: "1px solid #0097ab", color: "#0097ab" }}
                  onClick={handleGenerate}
                  disabled={loading || !filesUploaded}
                >
                  {loading ? 'Generating...' : 'Generate'}
                </Button>
              </>
            )}
            {loading && <CircularProgress />}
          </Box>
        )}

        {/* {errors.length > 0 && (
      <Box mt={2}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color="error">Errors</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              {errors.map((error, index) => (
                <li key={index}>{error} is missing</li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
      </Box>
    )} */}

        {showResults && fullResult.length>0 && <CsvTableComponent response={fullResult} />}

        {/* {showResults && <ResultsSection requests={requests} responses={responses} outputFormat={outputFormat} output={output} />} */}
      </Container>
      <ToastContainer />
    </>
  );
}




// Step 2: Fetch the file using the pre-signed URL
//     const fileResponse = await fetch(download_url);

//     if (!fileResponse.ok) {
//       throw new Error('Failed to download the file.');
//     }

//     // Step 3: Create a Blob from the response data
//     const blob = await fileResponse.blob();
//     console.log('Blob Size:', blob.size);
//     console.log('Blob Type:', blob.type);

//     // Check if the Blob is empty or not
//     if (blob.size === 0) {
//       throw new Error('The downloaded file is empty.');
//     }

//     // Step 4: Create a URL for the Blob and download it
//     const url = window.URL.createObjectURL(blob);

//     // Create a link element, set its href to the Blob URL, and simulate a click to start the download
//     const link = document.createElement('a');
//     link.href = url;
//     link.setAttribute('download', 'outputs.zip'); // Adjust the file name if necessary

//     // Append the link to the body and simulate a click to trigger the download
//     document.body.appendChild(link);
//     link.click();

//     // Clean up
//     link.remove();
//     window.URL.revokeObjectURL(url);
//   } catch (error) {
//     console.error('Error downloading outputs:', error.message);
//     // Handle error (e.g., show an error message to the user)
//   }
// };







// function ResultsSection({ requests, responses, outputFormat, output }) {
//   const [selectedOutput, setSelectedOutput] = useState(0);
//   const [outputOptions, setOutputOptions] = useState([])

//   useEffect(() => {
//     // Create output options based on the number of requests/responses
//     const options = requests.map((_, index) => ({
//       value: index,
//       label: `Output ${index + 1}`
//     }));
//     setOutputOptions(options);
//   }, [requests]);

//   const handleOutputChange = (event) => {
//     setSelectedOutput(event.target.value);
//   };
//   const handleDownload = async () => {
//     try {
//       // Step 1: Get the response from the backend API to retrieve the pre-signed URL
//       const response = await api.get(`/download?unique_folder=${output}`); // Replace with your actual API endpoint

//       if (response.status !== 200) {
//         throw new Error('Failed to get the pre-signed URL.');
//       }

//       const { download_url } = response.data; // Extract the pre-signed URL from the response
//       console.log('Received Pre-Signed URL:', download_url);

//       const link = document.createElement('a');
//         link.href = download_url; // Use the pre-signed URL
//         link.setAttribute('download', 'outputs.zip'); // Optional, browsers should handle this automatically
//         document.body.appendChild(link);
//         link.click();
//         link.remove();

//       } catch (error) {
//         console.error('Error downloading selected output:', error);
//         // Handle error (e.g., show an error message to the user)
//       }
//     };

//   const handleDownloadSelected = async () => {
//     try {
//       const response = await api.get(`/file-download?unique_folder=${output}&folder_name=data${selectedOutput + 1}`);
//       const { download_url } = response.data;

//       // Create an anchor element and trigger a download
//       const link = document.createElement('a');
//       link.href = download_url; // Use the pre-signed URL
//       link.setAttribute('download', `output${selectedOutput + 1}.zip`); // Optional, browsers should handle this automatically
//       document.body.appendChild(link);
//       link.click();
//       link.remove();

//     } catch (error) {
//       console.error('Error downloading selected output:', error);
//       // Handle error (e.g., show an error message to the user)
//     }
//   };

//   const formatXml = (xmlString) => {
//     const parser = new DOMParser();
//     const xmlDoc = parser.parseFromString(xmlString, 'application/xml');
//     const serializer = new XMLSerializer();
//     const prettyXml = serializer.serializeToString(xmlDoc);
//     const formattedXml = xmlFormatter(xmlString, { indentation: '  ', lineSeparator: '\n' });
//     return formattedXml;
//   };
//   // const formattedXml = xmlFormatter(xmlString, { indentation: '  ', lineSeparator: '\n' });

//   return (
//     <Box mt={5} id="data-card">
//       <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
//         <Typography variant="h6">Generated Data:</Typography>
//         <Tooltip title="Download All Data">
//           <Button
//             style={{
//               backgroundColor: "#fff",
//               color: "#0097ab",
//               fontSize: "12px",
//               minWidth: "20em",
//               border: "1px solid #0097ab"
//             }}
//             onClick={handleDownload}
//           >
//             Download All Data
//             <DownloadIcon fontSize="small" style={{ marginLeft: '5px' }} />
//           </Button>
//         </Tooltip>
//       </Box>

//       <Box display="flex" alignItems="center" mb={2}>
//         <FormControl style={{ minWidth: 200, marginRight: '20px' }}>
//           <InputLabel id="output-select-label">Select Output</InputLabel>
//           <Select
//             labelId="output-select-label"
//             id="output-select"
//             value={selectedOutput}
//             label="Select Output"
//             onChange={handleOutputChange}
//           >
//             {outputOptions.map((option) => (
//               <MenuItem key={option.value} value={option.value}>
//                 {option.label}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//         <Tooltip title={`Download Output ${selectedOutput + 1}`}>
//           <Button
//             style={{
//               fontSize: "12px",
//               minWidth: "10em",
//               backgroundColor: "#fff",
//               color: "#0097ab",
//               border: "1px solid #0097ab"
//             }}
//             startIcon={<DownloadIcon />}
//             onClick={handleDownloadSelected}
//           >
//             Download Selected
//           </Button>
//         </Tooltip>
//       </Box>


//       <Grid container spacing={2}>
//         <Grid item xs={6}>
//           <PreviewBox
//             heading="Request"
//             content={
//               outputFormat === 'xml'
//                 ? formatXml(requests[selectedOutput])
//                 : JSON.stringify(requests[selectedOutput], null, 2)
//             }
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <PreviewBox
//             heading="Response"
//             content={
//               outputFormat === 'xml'
//                 ? formatXml(responses[selectedOutput])
//                 : JSON.stringify(responses[selectedOutput], null, 2)
//             }
//           />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


function UploadBox({ fileInputRef, onFileChange, label }) {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
      onFileChange(e);
    }
  };

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      onFileChange(e);
    }
  };

  return (
    <div>
      <div
        style={{
          borderRadius: '4px',
          border: '1.8px dashed #0097AB',
          margin: '15px 0px',
          boxSizing: 'border-box',
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        className={`upload-box ${isDragging ? 'dragging' : ''}`}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleFileClick}
      >

        <div
          style={{
            display: 'flex',
            color: 'black',
          }}
        >
          <img
            style={{
              width: '100px',
              height: '80px',
              color: 'black',
            }}
            src={uploadImg}
            alt="SVG Image"
          />

          <div
            style={{
              boxSizing: 'border-box',
              margin: '10px 10px 10px 40px',
              fontFamily: 'monospace',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              padding: '5px',
              fontSize: '12px',
            }}
          >
            <div style={{ fontWeight: 600 }}>
              {fileName ? fileName : 'Drag & Drop your JSON/csv file here'}
            </div>
            <div>
              or
              <input
                type="file"
                hidden
                ref={fileInputRef}
                onChange={handleFileChange}
              />
              <span
                style={{
                  fontWeight: 900,
                  fontFamily: 'monospace',
                  marginLeft: '4px',
                  color: '#0097AB',
                }}
              >
                Upload from computer
              </span>
            </div>
            <span style={{ color: 'gray' }}>Upload Your JSON/csv file</span>
          </div>
        </div>

      </div>
    </div>
  );
}

function PreviewBox({ heading, content }) {
  const [isEnlarged, setIsEnlarged] = useState(false);

  const handleEnlarge = () => {
    setIsEnlarged(true);
  };

  const handleClose = () => {
    setIsEnlarged(false);
  };

  return (
    <>
      <Card style={{ boxShadow: 'none' }}>
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">{heading}</Typography>
            <IconButton onClick={handleEnlarge} size="small">
              <FullscreenIcon />
            </IconButton>
          </Box>
          <Box
            mt={2}
            style={{
              height: '300px',
              overflowY: 'auto',
              border: '1px solid #ddd',
              backgroundColor: '#f9f9f9'
            }}
          >
            <pre>{content}</pre>
          </Box>
        </CardContent>
      </Card>
      <Dialog
        fullScreen
        open={isEnlarged}
        onClose={handleClose}
      >
        <DialogContent>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6">{heading}</Typography>
            <IconButton onClick={handleClose} size="small">
              <FullscreenIcon />
            </IconButton>
          </Box>
          <Box
            p={2}
            style={{
              height: 'calc(100vh - 100px)',
              overflowY: 'auto',
              border: '1px solid #ddd',
              backgroundColor: '#f9f9f9'
            }}
          >
            <pre>{content}</pre>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default SyntheticDataGenerator;
