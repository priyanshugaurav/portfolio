import React from "react";

interface RectData {
  x: number;
  y: number;
  date: string;
  count: number;
  level: number;
}

const RECTS: RectData[] = [{"x":0,"y":109,"date":"2025-09-27","count":0,"level":0},{"x":15,"y":19,"date":"2025-09-28","count":0,"level":0},{"x":15,"y":34,"date":"2025-09-29","count":0,"level":0},{"x":15,"y":49,"date":"2025-09-30","count":0,"level":0},{"x":15,"y":64,"date":"2025-10-01","count":0,"level":0},{"x":15,"y":79,"date":"2025-10-02","count":0,"level":0},{"x":15,"y":94,"date":"2025-10-03","count":0,"level":0},{"x":15,"y":109,"date":"2025-10-04","count":0,"level":0},{"x":30,"y":19,"date":"2025-10-05","count":0,"level":0},{"x":30,"y":34,"date":"2025-10-06","count":0,"level":0},{"x":30,"y":49,"date":"2025-10-07","count":0,"level":0},{"x":30,"y":64,"date":"2025-10-08","count":0,"level":0},{"x":30,"y":79,"date":"2025-10-09","count":0,"level":0},{"x":30,"y":94,"date":"2025-10-10","count":0,"level":0},{"x":30,"y":109,"date":"2025-10-11","count":0,"level":0},{"x":45,"y":19,"date":"2025-10-12","count":0,"level":0},{"x":45,"y":34,"date":"2025-10-13","count":0,"level":0},{"x":45,"y":49,"date":"2025-10-14","count":0,"level":0},{"x":45,"y":64,"date":"2025-10-15","count":0,"level":0},{"x":45,"y":79,"date":"2025-10-16","count":0,"level":0},{"x":45,"y":94,"date":"2025-10-17","count":0,"level":0},{"x":45,"y":109,"date":"2025-10-18","count":0,"level":0},{"x":60,"y":19,"date":"2025-10-19","count":0,"level":0},{"x":60,"y":34,"date":"2025-10-20","count":0,"level":0},{"x":60,"y":49,"date":"2025-10-21","count":0,"level":0},{"x":60,"y":64,"date":"2025-10-22","count":0,"level":0},{"x":60,"y":79,"date":"2025-10-23","count":0,"level":0},{"x":60,"y":94,"date":"2025-10-24","count":0,"level":0},{"x":60,"y":109,"date":"2025-10-25","count":0,"level":0},{"x":75,"y":19,"date":"2025-10-26","count":0,"level":0},{"x":75,"y":34,"date":"2025-10-27","count":0,"level":0},{"x":75,"y":49,"date":"2025-10-28","count":0,"level":0},{"x":75,"y":64,"date":"2025-10-29","count":0,"level":0},{"x":75,"y":79,"date":"2025-10-30","count":0,"level":0},{"x":75,"y":94,"date":"2025-10-31","count":0,"level":0},{"x":75,"y":109,"date":"2025-11-01","count":0,"level":0},{"x":90,"y":19,"date":"2025-11-02","count":0,"level":0},{"x":90,"y":34,"date":"2025-11-03","count":0,"level":0},{"x":90,"y":49,"date":"2025-11-04","count":0,"level":0},{"x":90,"y":64,"date":"2025-11-05","count":0,"level":0},{"x":90,"y":79,"date":"2025-11-06","count":0,"level":0},{"x":90,"y":94,"date":"2025-11-07","count":0,"level":0},{"x":90,"y":109,"date":"2025-11-08","count":0,"level":0},{"x":105,"y":19,"date":"2025-11-09","count":0,"level":0},{"x":105,"y":34,"date":"2025-11-10","count":0,"level":0},{"x":105,"y":49,"date":"2025-11-11","count":4,"level":2},{"x":105,"y":64,"date":"2025-11-12","count":0,"level":0},{"x":105,"y":79,"date":"2025-11-13","count":0,"level":0},{"x":105,"y":94,"date":"2025-11-14","count":0,"level":0},{"x":105,"y":109,"date":"2025-11-15","count":0,"level":0},{"x":120,"y":19,"date":"2025-11-16","count":0,"level":0},{"x":120,"y":34,"date":"2025-11-17","count":0,"level":0},{"x":120,"y":49,"date":"2025-11-18","count":0,"level":0},{"x":120,"y":64,"date":"2025-11-19","count":0,"level":0},{"x":120,"y":79,"date":"2025-11-20","count":0,"level":0},{"x":120,"y":94,"date":"2025-11-21","count":0,"level":0},{"x":120,"y":109,"date":"2025-11-22","count":0,"level":0},{"x":135,"y":19,"date":"2025-11-23","count":0,"level":0},{"x":135,"y":34,"date":"2025-11-24","count":0,"level":0},{"x":135,"y":49,"date":"2025-11-25","count":0,"level":0},{"x":135,"y":64,"date":"2025-11-26","count":0,"level":0},{"x":135,"y":79,"date":"2025-11-27","count":0,"level":0},{"x":135,"y":94,"date":"2025-11-28","count":0,"level":0},{"x":135,"y":109,"date":"2025-11-29","count":0,"level":0},{"x":150,"y":19,"date":"2025-11-30","count":0,"level":0},{"x":150,"y":34,"date":"2025-12-01","count":0,"level":0},{"x":150,"y":49,"date":"2025-12-02","count":0,"level":0},{"x":150,"y":64,"date":"2025-12-03","count":0,"level":0},{"x":150,"y":79,"date":"2025-12-04","count":0,"level":0},{"x":150,"y":94,"date":"2025-12-05","count":0,"level":0},{"x":150,"y":109,"date":"2025-12-06","count":0,"level":0},{"x":165,"y":19,"date":"2025-12-07","count":0,"level":0},{"x":165,"y":34,"date":"2025-12-08","count":0,"level":0},{"x":165,"y":49,"date":"2025-12-09","count":0,"level":0},{"x":165,"y":64,"date":"2025-12-10","count":0,"level":0},{"x":165,"y":79,"date":"2025-12-11","count":0,"level":0},{"x":165,"y":94,"date":"2025-12-12","count":0,"level":0},{"x":165,"y":109,"date":"2025-12-13","count":5,"level":2},{"x":180,"y":19,"date":"2025-12-14","count":0,"level":0},{"x":180,"y":34,"date":"2025-12-15","count":0,"level":0},{"x":180,"y":49,"date":"2025-12-16","count":0,"level":0},{"x":180,"y":64,"date":"2025-12-17","count":0,"level":0},{"x":180,"y":79,"date":"2025-12-18","count":0,"level":0},{"x":180,"y":94,"date":"2025-12-19","count":0,"level":0},{"x":180,"y":109,"date":"2025-12-20","count":0,"level":0},{"x":195,"y":19,"date":"2025-12-21","count":0,"level":0},{"x":195,"y":34,"date":"2025-12-22","count":0,"level":0},{"x":195,"y":49,"date":"2025-12-23","count":0,"level":0},{"x":195,"y":64,"date":"2025-12-24","count":0,"level":0},{"x":195,"y":79,"date":"2025-12-25","count":0,"level":0},{"x":195,"y":94,"date":"2025-12-26","count":0,"level":0},{"x":195,"y":109,"date":"2025-12-27","count":0,"level":0},{"x":210,"y":19,"date":"2025-12-28","count":0,"level":0},{"x":210,"y":34,"date":"2025-12-29","count":0,"level":0},{"x":210,"y":49,"date":"2025-12-30","count":0,"level":0},{"x":210,"y":64,"date":"2025-12-31","count":0,"level":0},{"x":210,"y":79,"date":"2026-01-01","count":0,"level":0},{"x":210,"y":94,"date":"2026-01-02","count":0,"level":0},{"x":210,"y":109,"date":"2026-01-03","count":0,"level":0},{"x":225,"y":19,"date":"2026-01-04","count":0,"level":0},{"x":225,"y":34,"date":"2026-01-05","count":0,"level":0},{"x":225,"y":49,"date":"2026-01-06","count":0,"level":0},{"x":225,"y":64,"date":"2026-01-07","count":0,"level":0},{"x":225,"y":79,"date":"2026-01-08","count":0,"level":0},{"x":225,"y":94,"date":"2026-01-09","count":0,"level":0},{"x":225,"y":109,"date":"2026-01-10","count":0,"level":0},{"x":240,"y":19,"date":"2026-01-11","count":0,"level":0},{"x":240,"y":34,"date":"2026-01-12","count":0,"level":0},{"x":240,"y":49,"date":"2026-01-13","count":0,"level":0},{"x":240,"y":64,"date":"2026-01-14","count":0,"level":0},{"x":240,"y":79,"date":"2026-01-15","count":0,"level":0},{"x":240,"y":94,"date":"2026-01-16","count":0,"level":0},{"x":240,"y":109,"date":"2026-01-17","count":0,"level":0},{"x":255,"y":19,"date":"2026-01-18","count":0,"level":0},{"x":255,"y":34,"date":"2026-01-19","count":0,"level":0},{"x":255,"y":49,"date":"2026-01-20","count":0,"level":0},{"x":255,"y":64,"date":"2026-01-21","count":0,"level":0},{"x":255,"y":79,"date":"2026-01-22","count":0,"level":0},{"x":255,"y":94,"date":"2026-01-23","count":0,"level":0},{"x":255,"y":109,"date":"2026-01-24","count":0,"level":0},{"x":270,"y":19,"date":"2026-01-25","count":0,"level":0},{"x":270,"y":34,"date":"2026-01-26","count":0,"level":0},{"x":270,"y":49,"date":"2026-01-27","count":0,"level":0},{"x":270,"y":64,"date":"2026-01-28","count":0,"level":0},{"x":270,"y":79,"date":"2026-01-29","count":0,"level":0},{"x":270,"y":94,"date":"2026-01-30","count":0,"level":0},{"x":270,"y":109,"date":"2026-01-31","count":0,"level":0},{"x":285,"y":19,"date":"2026-02-01","count":0,"level":0},{"x":285,"y":34,"date":"2026-02-02","count":0,"level":0},{"x":285,"y":49,"date":"2026-02-03","count":0,"level":0},{"x":285,"y":64,"date":"2026-02-04","count":0,"level":0},{"x":285,"y":79,"date":"2026-02-05","count":0,"level":0},{"x":285,"y":94,"date":"2026-02-06","count":0,"level":0},{"x":285,"y":109,"date":"2026-02-07","count":0,"level":0},{"x":300,"y":19,"date":"2026-02-08","count":0,"level":0},{"x":300,"y":34,"date":"2026-02-09","count":0,"level":0},{"x":300,"y":49,"date":"2026-02-10","count":0,"level":0},{"x":300,"y":64,"date":"2026-02-11","count":0,"level":0},{"x":300,"y":79,"date":"2026-02-12","count":0,"level":0},{"x":300,"y":94,"date":"2026-02-13","count":0,"level":0},{"x":300,"y":109,"date":"2026-02-14","count":0,"level":0},{"x":315,"y":19,"date":"2026-02-15","count":0,"level":0},{"x":315,"y":34,"date":"2026-02-16","count":0,"level":0},{"x":315,"y":49,"date":"2026-02-17","count":0,"level":0},{"x":315,"y":64,"date":"2026-02-18","count":0,"level":0},{"x":315,"y":79,"date":"2026-02-19","count":0,"level":0},{"x":315,"y":94,"date":"2026-02-20","count":0,"level":0},{"x":315,"y":109,"date":"2026-02-21","count":0,"level":0},{"x":330,"y":19,"date":"2026-02-22","count":0,"level":0},{"x":330,"y":34,"date":"2026-02-23","count":0,"level":0},{"x":330,"y":49,"date":"2026-02-24","count":0,"level":0},{"x":330,"y":64,"date":"2026-02-25","count":3,"level":2},{"x":330,"y":79,"date":"2026-02-26","count":0,"level":0},{"x":330,"y":94,"date":"2026-02-27","count":0,"level":0},{"x":330,"y":109,"date":"2026-02-28","count":0,"level":0},{"x":345,"y":19,"date":"2026-03-01","count":0,"level":0},{"x":345,"y":34,"date":"2026-03-02","count":0,"level":0},{"x":345,"y":49,"date":"2026-03-03","count":0,"level":0},{"x":345,"y":64,"date":"2026-03-04","count":0,"level":0},{"x":345,"y":79,"date":"2026-03-05","count":0,"level":0},{"x":345,"y":94,"date":"2026-03-06","count":0,"level":0},{"x":345,"y":109,"date":"2026-03-07","count":0,"level":0},{"x":360,"y":19,"date":"2026-03-08","count":0,"level":0},{"x":360,"y":34,"date":"2026-03-09","count":0,"level":0},{"x":360,"y":49,"date":"2026-03-10","count":0,"level":0},{"x":360,"y":64,"date":"2026-03-11","count":0,"level":0},{"x":360,"y":79,"date":"2026-03-12","count":0,"level":0},{"x":360,"y":94,"date":"2026-03-13","count":0,"level":0},{"x":360,"y":109,"date":"2026-03-14","count":0,"level":0},{"x":375,"y":19,"date":"2026-03-15","count":0,"level":0},{"x":375,"y":34,"date":"2026-03-16","count":0,"level":0},{"x":375,"y":49,"date":"2026-03-17","count":0,"level":0},{"x":375,"y":64,"date":"2026-03-18","count":0,"level":0},{"x":375,"y":79,"date":"2026-03-19","count":0,"level":0},{"x":375,"y":94,"date":"2026-03-20","count":0,"level":0},{"x":375,"y":109,"date":"2026-03-21","count":0,"level":0},{"x":390,"y":19,"date":"2026-03-22","count":0,"level":0},{"x":390,"y":34,"date":"2026-03-23","count":0,"level":0},{"x":390,"y":49,"date":"2026-03-24","count":0,"level":0},{"x":390,"y":64,"date":"2026-03-25","count":0,"level":0},{"x":390,"y":79,"date":"2026-03-26","count":0,"level":0},{"x":390,"y":94,"date":"2026-03-27","count":0,"level":0},{"x":390,"y":109,"date":"2026-03-28","count":7,"level":3},{"x":405,"y":19,"date":"2026-03-29","count":0,"level":0},{"x":405,"y":34,"date":"2026-03-30","count":0,"level":0},{"x":405,"y":49,"date":"2026-03-31","count":0,"level":0},{"x":405,"y":64,"date":"2026-04-01","count":0,"level":0},{"x":405,"y":79,"date":"2026-04-02","count":0,"level":0},{"x":405,"y":94,"date":"2026-04-03","count":0,"level":0},{"x":405,"y":109,"date":"2026-04-04","count":4,"level":2},{"x":420,"y":19,"date":"2026-04-05","count":0,"level":0},{"x":420,"y":34,"date":"2026-04-06","count":0,"level":0},{"x":420,"y":49,"date":"2026-04-07","count":0,"level":0},{"x":420,"y":64,"date":"2026-04-08","count":0,"level":0},{"x":420,"y":79,"date":"2026-04-09","count":0,"level":0},{"x":420,"y":94,"date":"2026-04-10","count":0,"level":0},{"x":420,"y":109,"date":"2026-04-11","count":0,"level":0},{"x":435,"y":19,"date":"2026-04-12","count":0,"level":0},{"x":435,"y":34,"date":"2026-04-13","count":0,"level":0},{"x":435,"y":49,"date":"2026-04-14","count":0,"level":0},{"x":435,"y":64,"date":"2026-04-15","count":0,"level":0},{"x":435,"y":79,"date":"2026-04-16","count":0,"level":0},{"x":435,"y":94,"date":"2026-04-17","count":0,"level":0},{"x":435,"y":109,"date":"2026-04-18","count":0,"level":0},{"x":450,"y":19,"date":"2026-04-19","count":0,"level":0},{"x":450,"y":34,"date":"2026-04-20","count":0,"level":0},{"x":450,"y":49,"date":"2026-04-21","count":0,"level":0},{"x":450,"y":64,"date":"2026-04-22","count":0,"level":0},{"x":450,"y":79,"date":"2026-04-23","count":0,"level":0},{"x":450,"y":94,"date":"2026-04-24","count":0,"level":0},{"x":450,"y":109,"date":"2026-04-25","count":0,"level":0},{"x":465,"y":19,"date":"2026-04-26","count":0,"level":0},{"x":465,"y":34,"date":"2026-04-27","count":0,"level":0},{"x":465,"y":49,"date":"2026-04-28","count":0,"level":0},{"x":465,"y":64,"date":"2026-04-29","count":0,"level":0},{"x":465,"y":79,"date":"2026-04-30","count":0,"level":0},{"x":465,"y":94,"date":"2026-05-01","count":0,"level":0},{"x":465,"y":109,"date":"2026-05-02","count":0,"level":0},{"x":480,"y":19,"date":"2026-05-03","count":0,"level":0},{"x":480,"y":34,"date":"2026-05-04","count":0,"level":0},{"x":480,"y":49,"date":"2026-05-05","count":0,"level":0},{"x":480,"y":64,"date":"2026-05-06","count":0,"level":0},{"x":480,"y":79,"date":"2026-05-07","count":0,"level":0},{"x":480,"y":94,"date":"2026-05-08","count":0,"level":0},{"x":480,"y":109,"date":"2026-05-09","count":0,"level":0},{"x":495,"y":19,"date":"2026-05-10","count":0,"level":0},{"x":495,"y":34,"date":"2026-05-11","count":0,"level":0},{"x":495,"y":49,"date":"2026-05-12","count":0,"level":0},{"x":495,"y":64,"date":"2026-05-13","count":0,"level":0},{"x":495,"y":79,"date":"2026-05-14","count":0,"level":0},{"x":495,"y":94,"date":"2026-05-15","count":0,"level":0},{"x":495,"y":109,"date":"2026-05-16","count":0,"level":0},{"x":510,"y":19,"date":"2026-05-17","count":0,"level":0},{"x":510,"y":34,"date":"2026-05-18","count":0,"level":0},{"x":510,"y":49,"date":"2026-05-19","count":0,"level":0},{"x":510,"y":64,"date":"2026-05-20","count":0,"level":0},{"x":510,"y":79,"date":"2026-05-21","count":0,"level":0},{"x":510,"y":94,"date":"2026-05-22","count":0,"level":0},{"x":510,"y":109,"date":"2026-05-23","count":0,"level":0},{"x":525,"y":19,"date":"2026-05-24","count":0,"level":0},{"x":525,"y":34,"date":"2026-05-25","count":0,"level":0},{"x":525,"y":49,"date":"2026-05-26","count":0,"level":0},{"x":525,"y":64,"date":"2026-05-27","count":8,"level":3},{"x":525,"y":79,"date":"2026-05-28","count":0,"level":0},{"x":525,"y":94,"date":"2026-05-29","count":0,"level":0},{"x":525,"y":109,"date":"2026-05-30","count":0,"level":0},{"x":540,"y":19,"date":"2026-05-31","count":0,"level":0},{"x":540,"y":34,"date":"2026-06-01","count":0,"level":0},{"x":540,"y":49,"date":"2026-06-02","count":0,"level":0},{"x":540,"y":64,"date":"2026-06-03","count":0,"level":0},{"x":540,"y":79,"date":"2026-06-04","count":0,"level":0},{"x":540,"y":94,"date":"2026-06-05","count":0,"level":0},{"x":540,"y":109,"date":"2026-06-06","count":0,"level":0},{"x":555,"y":19,"date":"2026-06-07","count":0,"level":0},{"x":555,"y":34,"date":"2026-06-08","count":0,"level":0},{"x":555,"y":49,"date":"2026-06-09","count":0,"level":0},{"x":555,"y":64,"date":"2026-06-10","count":0,"level":0},{"x":555,"y":79,"date":"2026-06-11","count":0,"level":0},{"x":555,"y":94,"date":"2026-06-12","count":0,"level":0},{"x":555,"y":109,"date":"2026-06-13","count":0,"level":0},{"x":570,"y":19,"date":"2026-06-14","count":0,"level":0},{"x":570,"y":34,"date":"2026-06-15","count":0,"level":0},{"x":570,"y":49,"date":"2026-06-16","count":0,"level":0},{"x":570,"y":64,"date":"2026-06-17","count":0,"level":0},{"x":570,"y":79,"date":"2026-06-18","count":0,"level":0},{"x":570,"y":94,"date":"2026-06-19","count":0,"level":0},{"x":570,"y":109,"date":"2026-06-20","count":0,"level":0},{"x":585,"y":19,"date":"2026-06-21","count":0,"level":0},{"x":585,"y":34,"date":"2026-06-22","count":0,"level":0},{"x":585,"y":49,"date":"2026-06-23","count":0,"level":0},{"x":585,"y":64,"date":"2026-06-24","count":0,"level":0},{"x":585,"y":79,"date":"2026-06-25","count":0,"level":0},{"x":585,"y":94,"date":"2026-06-26","count":0,"level":0},{"x":585,"y":109,"date":"2026-06-27","count":0,"level":0},{"x":600,"y":19,"date":"2026-06-28","count":0,"level":0},{"x":600,"y":34,"date":"2026-06-29","count":0,"level":0},{"x":600,"y":49,"date":"2026-06-30","count":0,"level":0},{"x":600,"y":64,"date":"2026-07-01","count":0,"level":0},{"x":600,"y":79,"date":"2026-07-02","count":0,"level":0},{"x":600,"y":94,"date":"2026-07-03","count":0,"level":0},{"x":600,"y":109,"date":"2026-07-04","count":0,"level":0},{"x":615,"y":19,"date":"2026-07-05","count":0,"level":0},{"x":615,"y":34,"date":"2026-07-06","count":0,"level":0},{"x":615,"y":49,"date":"2026-07-07","count":0,"level":0},{"x":615,"y":64,"date":"2026-07-08","count":0,"level":0},{"x":615,"y":79,"date":"2026-07-09","count":0,"level":0},{"x":615,"y":94,"date":"2026-07-10","count":0,"level":0},{"x":615,"y":109,"date":"2026-07-11","count":0,"level":0},{"x":630,"y":19,"date":"2026-07-12","count":0,"level":0},{"x":630,"y":34,"date":"2026-07-13","count":0,"level":0},{"x":630,"y":49,"date":"2026-07-14","count":0,"level":0},{"x":630,"y":64,"date":"2026-07-15","count":0,"level":0},{"x":630,"y":79,"date":"2026-07-16","count":0,"level":0},{"x":630,"y":94,"date":"2026-07-17","count":0,"level":0},{"x":630,"y":109,"date":"2026-07-18","count":0,"level":0},{"x":645,"y":19,"date":"2026-07-19","count":0,"level":0},{"x":645,"y":34,"date":"2026-07-20","count":0,"level":0},{"x":645,"y":49,"date":"2026-07-21","count":0,"level":0},{"x":645,"y":64,"date":"2026-07-22","count":0,"level":0},{"x":645,"y":79,"date":"2026-07-23","count":0,"level":0},{"x":645,"y":94,"date":"2026-07-24","count":0,"level":0},{"x":645,"y":109,"date":"2026-07-25","count":0,"level":0},{"x":660,"y":19,"date":"2026-07-26","count":0,"level":0},{"x":660,"y":34,"date":"2026-07-27","count":0,"level":0},{"x":660,"y":49,"date":"2026-07-28","count":0,"level":0},{"x":660,"y":64,"date":"2026-07-29","count":0,"level":0},{"x":660,"y":79,"date":"2026-07-30","count":0,"level":0},{"x":660,"y":94,"date":"2026-07-31","count":0,"level":0},{"x":660,"y":109,"date":"2026-08-01","count":0,"level":0},{"x":675,"y":19,"date":"2026-08-02","count":0,"level":0},{"x":675,"y":34,"date":"2026-08-03","count":9,"level":3},{"x":675,"y":49,"date":"2026-08-04","count":14,"level":4},{"x":675,"y":64,"date":"2026-08-05","count":16,"level":4},{"x":675,"y":79,"date":"2026-08-06","count":8,"level":3},{"x":675,"y":94,"date":"2026-08-07","count":0,"level":0},{"x":675,"y":109,"date":"2026-08-08","count":0,"level":0},{"x":690,"y":19,"date":"2026-08-09","count":5,"level":2},{"x":690,"y":34,"date":"2026-08-10","count":15,"level":4},{"x":690,"y":49,"date":"2026-08-11","count":10,"level":3},{"x":690,"y":64,"date":"2026-08-12","count":0,"level":0},{"x":690,"y":79,"date":"2026-08-13","count":0,"level":0},{"x":690,"y":94,"date":"2026-08-14","count":0,"level":0},{"x":690,"y":109,"date":"2026-08-15","count":0,"level":0},{"x":705,"y":19,"date":"2026-08-16","count":0,"level":0},{"x":705,"y":34,"date":"2026-08-17","count":0,"level":0},{"x":705,"y":49,"date":"2026-08-18","count":0,"level":0},{"x":705,"y":64,"date":"2026-08-19","count":0,"level":0},{"x":705,"y":79,"date":"2026-08-20","count":0,"level":0},{"x":705,"y":94,"date":"2026-08-21","count":0,"level":0},{"x":705,"y":109,"date":"2026-08-22","count":0,"level":0},{"x":720,"y":19,"date":"2026-08-23","count":0,"level":0},{"x":720,"y":34,"date":"2026-08-24","count":0,"level":0},{"x":720,"y":49,"date":"2026-08-25","count":4,"level":2},{"x":720,"y":64,"date":"2026-08-26","count":0,"level":0},{"x":720,"y":79,"date":"2026-08-27","count":0,"level":0},{"x":720,"y":94,"date":"2026-08-28","count":0,"level":0},{"x":720,"y":109,"date":"2026-08-29","count":0,"level":0},{"x":735,"y":19,"date":"2026-08-30","count":0,"level":0},{"x":735,"y":34,"date":"2026-08-31","count":0,"level":0},{"x":735,"y":49,"date":"2026-09-01","count":0,"level":0},{"x":735,"y":64,"date":"2026-09-02","count":0,"level":0},{"x":735,"y":79,"date":"2026-09-03","count":0,"level":0},{"x":735,"y":94,"date":"2026-09-04","count":0,"level":0},{"x":735,"y":109,"date":"2026-09-05","count":0,"level":0},{"x":750,"y":19,"date":"2026-09-06","count":0,"level":0},{"x":750,"y":34,"date":"2026-09-07","count":0,"level":0},{"x":750,"y":49,"date":"2026-09-08","count":0,"level":0},{"x":750,"y":64,"date":"2026-09-09","count":0,"level":0},{"x":750,"y":79,"date":"2026-09-10","count":0,"level":0},{"x":750,"y":94,"date":"2026-09-11","count":0,"level":0},{"x":750,"y":109,"date":"2026-09-12","count":0,"level":0},{"x":765,"y":19,"date":"2026-09-13","count":0,"level":0},{"x":765,"y":34,"date":"2026-09-14","count":0,"level":0},{"x":765,"y":49,"date":"2026-09-15","count":0,"level":0},{"x":765,"y":64,"date":"2026-09-16","count":0,"level":0},{"x":765,"y":79,"date":"2026-09-17","count":0,"level":0},{"x":765,"y":94,"date":"2026-09-18","count":0,"level":0},{"x":765,"y":109,"date":"2026-09-19","count":0,"level":0},{"x":780,"y":19,"date":"2026-09-20","count":0,"level":0},{"x":780,"y":34,"date":"2026-09-21","count":0,"level":0},{"x":780,"y":49,"date":"2026-09-22","count":0,"level":0},{"x":780,"y":64,"date":"2026-09-23","count":0,"level":0},{"x":780,"y":79,"date":"2026-09-24","count":0,"level":0},{"x":780,"y":94,"date":"2026-09-25","count":0,"level":0},{"x":780,"y":109,"date":"2026-09-26","count":0,"level":0},{"x":795,"y":19,"date":"2026-09-27","count":0,"level":0},{"x":795,"y":34,"date":"2026-09-28","count":0,"level":0},{"x":795,"y":49,"date":"2026-09-29","count":0,"level":0},{"x":795,"y":64,"date":"2026-09-30","count":0,"level":0},{"x":795,"y":79,"date":"2026-10-01","count":0,"level":0},{"x":795,"y":94,"date":"2026-10-02","count":0,"level":0}];

const MONTHS = [
  { x: 30, name: "Oct" },
  { x: 90, name: "Nov" },
  { x: 165, name: "Dec" },
  { x: 225, name: "Jan" },
  { x: 285, name: "Feb" },
  { x: 345, name: "Mar" },
  { x: 420, name: "Apr" },
  { x: 480, name: "May" },
  { x: 555, name: "Jun" },
  { x: 615, name: "Jul" },
  { x: 675, name: "Aug" },
  { x: 750, name: "Sep" },
];

export const ContributionGraph: React.FC = () => {
  const getLevelClass = (level: number) => {
    switch (level) {
      case 1:
        return "fill-zinc-300 dark:fill-zinc-700";
      case 2:
        return "fill-zinc-400 dark:fill-zinc-600";
      case 3:
        return "fill-zinc-600 dark:fill-zinc-400";
      case 4:
        return "fill-zinc-950 dark:fill-zinc-100";
      default:
        return "fill-zinc-200/55 dark:fill-zinc-800/60";
    }
  };

  return (
    <div id="activity" className="mt-10 sm:mt-12">
      <div className="p-5 sm:p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-zinc-900/25 backdrop-blur-sm shadow-xs transition-all hover:border-zinc-300 dark:hover:border-zinc-700/80">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div>
            <h2 className="text-xs text-zinc-500 dark:text-zinc-400 font-geist-sans uppercase tracking-[0.14em]">
              GitHub Activity &amp; Commit Flow
            </h2>
            <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">
              Year-round consistency across open source &amp; client repositories
            </p>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200/70 dark:border-zinc-700/60">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            1,136 Commits
          </span>
        </div>
        <div className="relative -mx-3 sm:mx-0 overflow-x-auto sm:overflow-visible contribution-scroll">
          <div className="px-3 sm:px-0 min-w-[580px] sm:min-w-0">
          <div className="relative" style={{ aspectRatio: "791 / 140" }}>
            <div className="flex w-full flex-col gap-3" style={{ fontSize: 11 }}>
              <div className="w-full">
                <svg
                  className="block w-full h-auto"
                  viewBox="0 0 806 120"
                  preserveAspectRatio="xMinYMin meet"
                >
                  <g
                    className="text-[10px] font-geist-sans"
                    style={{
                      fill: "var(--color-ds-gray-600)",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                    }}
                  >
                    {MONTHS.map((m) => (
                      <text key={m.name} x={m.x} dominantBaseline="hanging">
                        {m.name}
                      </text>
                    ))}
                  </g>
                  {RECTS.map((r, i) => (
                    <rect
                      key={i}
                      x={r.x}
                      y={r.y}
                      width={11}
                      height={11}
                      rx={0}
                      ry={0}
                      data-date={r.date}
                      data-count={r.count}
                      data-level={r.level}
                      className={`${getLevelClass(r.level)} hover:fill-amber-500 dark:hover:fill-amber-400 hover:opacity-100 transition-colors cursor-pointer`}
                    />
                  ))}
                </svg>
              </div>

              {/* Bottom stats row */}
              <div className="flex flex-wrap gap-2 items-center justify-between mt-1">
                <div
                  className="text-[10px] sm:text-[11px] font-geist-sans uppercase"
                  style={{
                    color: "var(--color-ds-gray-600)",
                    letterSpacing: "0.14em",
                  }}
                >
                  <span className="font-medium" style={{ color: "var(--color-ds-gray-800)" }}>
                    1,136
                  </span>{" "}
                  CONTRIBUTIONS <span className="hidden md:inline-block">· 2025–26</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span
                    className="mr-1 text-[10px] sm:text-[11px] font-geist-sans uppercase"
                    style={{
                      color: "var(--color-ds-gray-600)",
                      letterSpacing: "0.14em",
                    }}
                  >
                    Less
                  </span>
                  <svg height="11" width="11">
                    <rect className="fill-zinc-200/55 dark:fill-zinc-800/60" height="11" width="11" />
                  </svg>
                  <svg height="11" width="11">
                    <rect className="fill-zinc-300 dark:fill-zinc-700" height="11" width="11" />
                  </svg>
                  <svg height="11" width="11">
                    <rect className="fill-zinc-400 dark:fill-zinc-600" height="11" width="11" />
                  </svg>
                  <svg height="11" width="11">
                    <rect className="fill-zinc-600 dark:fill-zinc-400" height="11" width="11" />
                  </svg>
                  <svg height="11" width="11">
                    <rect className="fill-zinc-800 dark:fill-zinc-200" height="11" width="11" />
                  </svg>
                  <span
                    className="ml-1 text-[10px] sm:text-[11px] font-geist-sans uppercase"
                    style={{
                      color: "var(--color-ds-gray-600)",
                      letterSpacing: "0.14em",
                    }}
                  >
                    More
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
