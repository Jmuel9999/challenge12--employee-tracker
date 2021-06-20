const express = require('express');
const connection = require('./db/connection');
// const db = require('./db');
const inquirer = require('inquirer');
const mysql2 = require('mysql2');

console.table('------------------Employee Tracker-----------------------')

// Start function for inquirer
questionPrompt = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'Please choose from the following options:', 
            name: 'startChoice',
            choices: [
                {
                    name: 'View all departments'
                    value: viewAllDepartments()
                }, 
                {
                    name: 'View all roles'
                }, 
                {
                    name: 'View all employees'
                }, 
                {
                    name: 'Add a department'
                }, 
                {
                    name: 'Add a role'
                }, 
                {
                    name: 'Add an employee'
                }, 
                {
                    name: 'Update an employee'
                }
            ],
            
            validate: startChoice => {
                if (startChoice) {
                    return true;
                } else {
                    console.log('You must select a choice from the list available!');
                }
            }
        }
    ])
    .then(res => {
            let selected = res.selected;
            switch (selected) {
                case 'VIEW_ALL_DEPARTMENTS':

            }
        }
    )  
}


// functions for slected choices from starting prompt
const viewAllDepartments = function () {

}

questionPrompt();