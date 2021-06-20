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
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee'],
            
            validate: startChoice => {
                if (startChoice) {
                    return true;
                } else {
                    console.log('You must select a choice from the list available!');
                }
            }
        }
    ])
}

questionPrompt();