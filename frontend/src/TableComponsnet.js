import React, { useState } from "react";
import { MenuItem, FormControl, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import Papa from "papaparse"; // Import Papa Parse to handle CSV parsing
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { Button,Tooltip } from "@mui/material";
import {Download as DownloadIcon } from '@mui/icons-material'
import { width } from "@mui/system";
const CsvTableComponent = (props) => {

    
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
        <Card style={{boxShadow: 'none'}}>
          <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center">
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
   
  const {response} = props
  console.log(response)
  console.log(response)
  const [selectedDataIndex, setSelectedDataIndex] = useState(0); // To select the dataset
  const [selectedField, setSelectedField] = useState("request"); // To select request/response field

  // Parse the CSV string into an array of objects

  // Get the CSV string based on the selected field and data index
  console.log(response[0]["request"])
  function handleDownloadSelected() {
    let blob; // Declare blob variable outside of the conditional blocks
  
    if (selectedField.includes("response")) {
      blob = new Blob([response[selectedDataIndex]["responses"][selectedField]], { type: 'text/csv;charset=utf-8;' });
    } else {
      blob = new Blob([response[selectedDataIndex][selectedField]], { type: 'text/csv;charset=utf-8;' });
    }
  
    // Create a link element
    const link = document.createElement('a');
    
    // Use the URL.createObjectURL to create a downloadable URL
    if (link.download !== undefined) {
      // Create a URL for the Blob and set it as the link's href
      link.href = URL.createObjectURL(blob);
      link.target = '_blank';
      
      // Set the download filename
      link.download = 'download.csv';
  
      // Append the link to the body and trigger a click to download the file
      document.body.appendChild(link);
      link.click();
  
      // Remove the link after the download
      document.body.removeChild(link);
    }
  }
  
  return (
    <div>
    <div style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
    }} >
        <div style={{
            display:"flex",
            gap:"5px",
            width : "500px"
        }}>
            
      {/* Dropdown to select which data object to display */}
      <FormControl variant="outlined"  margin="normal">
        <Select
          value={selectedDataIndex}
          onChange={(e) => setSelectedDataIndex(e.target.value)}
        >
          {response.map((_, index) => (
            <MenuItem key={index} value={index}>
              Data {index + 1}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Dropdown to select request/response field */}
      <FormControl variant="outlined"  margin="normal">
        <Select
          value={selectedField}
          onChange={(e) => setSelectedField(e.target.value)}
        >
          <MenuItem value="request">Request</MenuItem>
          <MenuItem value="response1">Response 1</MenuItem>
          <MenuItem value="response2">Response 2</MenuItem>
          <MenuItem value="response3">Response 3</MenuItem>
        </Select>
      </FormControl>
        </div>

        <Tooltip title={`Download Output ${selectedDataIndex + 1}`}>
           <Button
             style={{
               fontSize: "12px",
               minWidth: "10em",
               height:"40px",
               backgroundColor: "#fff",
               color: "#0097ab",
               border: "1px solid #0097ab"
             }}
             startIcon={<DownloadIcon />}
             onClick={handleDownloadSelected}
           >
             Download Selected
           </Button>
         </Tooltip>
    </div>

      {
          selectedField.includes("response") &&       <PreviewBox heading="test"content={response[selectedDataIndex]["responses"][selectedField]}/>

      }
      {
          !selectedField.includes("response") &&      <PreviewBox heading="test"content={response[selectedDataIndex][selectedField]}/>

      }

    </div>
  );
};

export default CsvTableComponent;
