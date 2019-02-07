import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import ErrorIcon from '@material-ui/icons/Error';
import { auth, LOCAL } from '../../db';
import Layout from '../Layout';
import { database } from '../../db';

class CreateData extends Component {

    constructor(props) {
    super(props);

    this.state = {
           users : [{ "Asad" : "AI"}, 
                    { "Farooq" : "FA"}, 
                    { "Prakash" : "PA"}, 
                    { "Tanver" : "TA"}, 
                    { "Thang" : "TT"},                     
                    { "Vaishali" : "VP"}
            ],
            data:  [  {
	    "date" : "01/01/2019",
      "day" : "1",
      "name" : "VP",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "02/01/2019",
      "day" : "2",
      "name" : "VP",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "03/01/2019",
      "day" : "3",
      "name" : "VP",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "04/01/2019",
      "day" : "4",
      "name" : "VP",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "05/01/2019",
      "day" : "5",
      "name" : "VP",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "06/01/2019",
      "day" : "6",
      "name" : "VP",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "07/01/2019",
      "day" : "7",
      "name" : "VP",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "08/01/2019",
      "day" : "8",
      "name" : "VP",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "09/01/2019",
      "day" : "9",
      "name" : "VP",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "10/01/2019",
      "day" : "10",
      "name" : "VP",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },	
	   {
	  "date" : "11/01/2019",
      "day" : "11",
      "name" : "VP",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "12/01/2019",
      "day" : "12",
      "name" : "VP",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "13/01/2019",
      "day" : "13",
      "name" : "VP",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "14/01/2019",
      "day" : "14",
      "name" : "VP",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "15/01/2019",
      "day" : "15",
      "name" : "VP",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "16/01/2019",
      "day" : "16",
      "name" : "VP",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "17/01/2019",
      "day" : "17",
      "name" : "VP",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "18/01/2019",
      "day" : "18",
      "name" : "VP",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "19/01/2019",
      "day" : "19",
      "name" : "VP",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "20/01/2019",
      "day" : "20",
      "name" : "VP",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	   {
	  "date" : "21/01/2019",
      "day" : "21",
      "name" : "VP",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "22/01/2019",
      "day" : "22",
      "name" : "VP",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "23/01/2019",
      "day" : "23",
      "name" : "VP",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "24/01/2019",
      "day" : "24",
      "name" : "VP",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "25/01/2019",
      "day" : "25",
      "name" : "VP",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "26/01/2019",
      "day" : "26",
      "name" : "VP",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "27/01/2019",
      "day" : "27",
      "name" : "VP",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "28/01/2019",
      "day" : "28",
      "name" : "VP",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "29/01/2019",
      "day" : "29",
      "name" : "VP",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "30/01/2019",
      "day" : "30",
      "name" : "VP",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "31/01/2019",
      "day" : "31",
      "name" : "VP",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
    {
	  "date" : "01/01/2019",
      "day" : "1",
      "name" : "TT",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "02/01/2019",
      "day" : "2",
      "name" : "TT",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "03/01/2019",
      "day" : "3",
      "name" : "TT",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "04/01/2019",
      "day" : "4",
      "name" : "TT",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "05/01/2019",
      "day" : "5",
      "name" : "TT",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "06/01/2019",
      "day" : "6",
      "name" : "TT",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "07/01/2019",
      "day" : "7",
      "name" : "TT",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "08/01/2019",
      "day" : "8",
      "name" : "TT",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "09/01/2019",
      "day" : "9",
      "name" : "TT",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{  "date" : "10/01/2019",
      "day" : "10",
      "name" : "TT",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },	
	   {"date" : "11/01/2019",
      "day" : "11",
      "name" : "TT",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{ "date" : "12/01/2019",
      "day" : "12",
      "name" : "TT",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "13/01/2019",
      "day" : "13",
      "name" : "TT",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "14/01/2019",
      "day" : "14",
      "name" : "TT",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "15/01/2019",
      "day" : "15",
      "name" : "TT",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "16/01/2019",
      "day" : "16",
      "name" : "TT",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "17/01/2019",
      "day" : "17",
      "name" : "TT",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "18/01/2019",
      "day" : "18",
      "name" : "TT",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "19/01/2019",
      "day" : "19",
      "name" : "TT",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "20/01/2019",
      "day" : "20",
      "name" : "TT",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	   {
	  "date" : "21/01/2019",
      "day" : "21",
      "name" : "TT",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "22/01/2019",
      "day" : "22",
      "name" : "TT",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "23/01/2019",
      "day" : "23",
      "name" : "TT",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "24/01/2019",
      "day" : "24",
      "name" : "TT",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "25/01/2019",
      "day" : "25",
      "name" : "TT",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "26/01/2019",
      "day" : "26",
      "name" : "TT",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "27/01/2019",
      "day" : "27",
      "name" : "TT",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "28/01/2019",
      "day" : "28",
      "name" : "TT",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "29/01/2019",
      "day" : "29",
      "name" : "TT",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "30/01/2019",
      "day" : "30",
      "name" : "TT",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "31/01/2019",
      "day" : "31",
      "name" : "TT",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	 {
	  "date" : "01/01/2019",
      "day" : "1",
      "name" : "FA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "02/01/2019",
      "day" : "2",
      "name" : "FA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "03/01/2019",
      "day" : "3",
      "name" : "FA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "04/01/2019",
      "day" : "4",
      "name" : "FA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "05/01/2019",
      "day" : "5",
      "name" : "FA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "06/01/2019",
      "day" : "6",
      "name" : "FA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "07/01/2019",
      "day" : "7",
      "name" : "FA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "08/01/2019",
      "day" : "8",
      "name" : "FA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "09/01/2019",
      "day" : "9",
      "name" : "FA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "10/01/2019",
      "day" : "10",
      "name" : "FA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },	
	   {
	  "date" : "11/01/2019",
      "day" : "11",
      "name" : "FA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "12/01/2019",
      "day" : "12",
      "name" : "FA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "13/01/2019",
      "day" : "13",
      "name" : "FA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "14/01/2019",
      "day" : "14",
      "name" : "FA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "15/01/2019",
      "day" : "15",
      "name" : "FA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "16/01/2019",
      "day" : "16",
      "name" : "FA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "17/01/2019",
      "day" : "17",
      "name" : "FA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "18/01/2019",
      "day" : "18",
      "name" : "FA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "19/01/2019",
      "day" : "19",
      "name" : "FA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "20/01/2019",
      "day" : "20",
      "name" : "FA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	   {
	  "date" : "21/01/2019",
      "day" : "21",
      "name" : "FA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "22/01/2019",
      "day" : "22",
      "name" : "FA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "23/01/2019",
      "day" : "23",
      "name" : "FA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "24/01/2019",
      "day" : "24",
      "name" : "FA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "25/01/2019",
      "day" : "25",
      "name" : "FA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "26/01/2019",
      "day" : "26",
      "name" : "FA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "27/01/2019",
      "day" : "27",
      "name" : "FA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "28/01/2019",
      "day" : "28",
      "name" : "FA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "29/01/2019",
      "day" : "29",
      "name" : "FA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "30/01/2019",
      "day" : "30",
      "name" : "FA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "31/01/2019",
      "day" : "31",
      "name" : "FA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	 {
	  "date" : "01/01/2019",
      "day" : "1",
      "name" : "PA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "02/01/2019",
      "day" : "2",
      "name" : "PA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "03/01/2019",
      "day" : "3",
      "name" : "PA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "04/01/2019",
      "day" : "4",
      "name" : "PA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "05/01/2019",
      "day" : "5",
      "name" : "PA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "06/01/2019",
      "day" : "6",
      "name" : "PA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "07/01/2019",
      "day" : "7",
      "name" : "PA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "08/01/2019",
      "day" : "8",
      "name" : "PA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "09/01/2019",
      "day" : "9",
      "name" : "PA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "10/01/2019",
      "day" : "10",
      "name" : "PA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },	
	   {
	  "date" : "11/01/2019",
      "day" : "11",
      "name" : "PA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "12/01/2019",
      "day" : "12",
      "name" : "PA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "13/01/2019",
      "day" : "13",
      "name" : "PA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "14/01/2019",
      "day" : "14",
      "name" : "PA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "15/01/2019",
      "day" : "15",
      "name" : "PA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "16/01/2019",
      "day" : "16",
      "name" : "PA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "17/01/2019",
      "day" : "17",
      "name" : "PA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "18/01/2019",
      "day" : "18",
      "name" : "PA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "19/01/2019",
      "day" : "19",
      "name" : "PA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "20/01/2019",
      "day" : "20",
      "name" : "PA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	   {
	  "date" : "21/01/2019",
      "day" : "21",
      "name" : "PA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "22/01/2019",
      "day" : "22",
      "name" : "PA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "23/01/2019",
      "day" : "23",
      "name" : "PA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "24/01/2019",
      "day" : "24",
      "name" : "PA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "25/01/2019",
      "day" : "25",
      "name" : "PA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "26/01/2019",
      "day" : "26",
      "name" : "PA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "27/01/2019",
      "day" : "27",
      "name" : "PA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "28/01/2019",
      "day" : "28",
      "name" : "PA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "29/01/2019",
      "day" : "29",
      "name" : "PA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "30/01/2019",
      "day" : "30",
      "name" : "PA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "31/01/2019",
      "day" : "31",
      "name" : "PA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
		 {
	  "date" : "01/01/2019",
      "day" : "1",
      "name" : "TA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "02/01/2019",
      "day" : "2",
      "name" : "TA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "03/01/2019",
      "day" : "3",
      "name" : "TA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "04/01/2019",
      "day" : "4",
      "name" : "TA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "05/01/2019",
      "day" : "5",
      "name" : "TA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "06/01/2019",
      "day" : "6",
      "name" : "TA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "07/01/2019",
      "day" : "7",
      "name" : "TA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "08/01/2019",
      "day" : "8",
      "name" : "TA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "09/01/2019",
      "day" : "9",
      "name" : "TA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "10/01/2019",
      "day" : "10",
      "name" : "TA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },	
	   {
	  "date" : "11/01/2019",
      "day" : "11",
      "name" : "TA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "12/01/2019",
      "day" : "12",
      "name" : "TA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "13/01/2019",
      "day" : "13",
      "name" : "TA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "14/01/2019",
      "day" : "14",
      "name" : "TA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "15/01/2019",
      "day" : "15",
      "name" : "TA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "16/01/2019",
      "day" : "16",
      "name" : "TA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "17/01/2019",
      "day" : "17",
      "name" : "TA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "18/01/2019",
      "day" : "18",
      "name" : "TA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "19/01/2019",
      "day" : "19",
      "name" : "TA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "20/01/2019",
      "day" : "20",
      "name" : "TA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	   {	  "date" : "21/01/2019",
      "day" : "21",
      "name" : "TA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "22/01/2019",
      "day" : "22",
      "name" : "TA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "23/01/2019",
      "day" : "23",
      "name" : "TA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "24/01/2019",
      "day" : "24",
      "name" : "TA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "25/01/2019",
      "day" : "25",
      "name" : "TA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "26/01/2019",
      "day" : "26",
      "name" : "TA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "27/01/2019",
      "day" : "27",
      "name" : "TA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "28/01/2019",
      "day" : "28",
      "name" : "TA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "29/01/2019",
      "day" : "29",
      "name" : "TA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "30/01/2019",
      "day" : "30",
      "name" : "TA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    },
	{
	  "date" : "31/01/2019",
      "day" : "31",
      "name" : "TA",
      "shift_AM" : "O",
      "shift_PM" : "O"
    }
  ]
    }
    this.handleSave = this.handleSave.bind(this);
    this.handleUsers = this.handleUsers.bind(this);
  }

    handleSave(e) {
       let dbCon = database.ref('/schedules');
       const sch = this.state.data;
        let dt = {};
         // schedules : this.state.data
          Object.keys(sch).map(id => {
              dt = {
                date: sch[id].date,
                day:  sch[id].day,
                name :  sch[id].name,
                shift_AM :  sch[id].shift_AM,
                shift_PM : sch[id].shift_PM
              }
              dbCon.push(dt)
        });
    }
    handleUsers(e) {
       let dbCon = database.ref('/users');
           dbCon.push({"Asad": "AI"});
           dbCon.push({"Farooq": "FA"})
           dbCon.push({"Prakash": "PA"})
           dbCon.push({"Tanver": "TA"})
           dbCon.push({"Vaishali": "VP"})
    }
  render() {

    return (
      <Layout drawer={false}>
        <div className="container">
          <Grid container justify="center">
            <Grid item xs={12} sm={8} md={4}>
                <h2>create data</h2>
                <Button variant="outlined" color="secondary" type="submit"  onClick={() => this.handleSave()}>Schedule Data </Button>
                <Button variant="outlined" color="secondary" type="submit"  onClick={() => this.handleUsers()}>Users Data </Button>
            </Grid>
          </Grid>
        </div>
      </Layout>
    );
  }
}

export default CreateData;