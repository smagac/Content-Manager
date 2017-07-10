import {EventBus} from 'renderer/eventbus.js';

export default class Item {
    constructor() {
        this.name = "";
        this.id = 0;
        this.type = null;
        this.craftable = false;
        this.censor = false;
        this.spoil = 8;
        this.rot = 10;
    }

    fromCSV(row) {
        this.id = parseInt(row[0]);
        this.name = row[1];
        this.type = row[2];
        this.craftable = row[3] == 'true';
        this.Audio = parseFloat(row[4])
        this.Video = parseFloat(row[5])
        this.Image = parseFloat(row[6])
        this.Exec = parseFloat(row[7])
        this.Zip = parseFloat(row[8])
        this.Other = parseFloat(row[9])
        this.spoil = parseInt(row[10]);
        this.rot = parseInt(row[11]);
        this.censor = row[12] == 'true';
    }

    validate() {
        if (this.rot < this.spoil) {
            EventBus.$emit("alert", "It must take more time to rot than to spoil");
            return false;
        }
        if (this.name.includes(",")) {
            EventBus.$emit("alert", "Names may not have commas in them");
            return false;
        }
        return true;
    }

    prepare() {
        return ['id', 'name', 'type', 'craftable', 'Audio', 'Video', 'Image', 'Exec', 'Zip', 'Other', 'spoil', 'rot', 'censor'].map((key) => this[key]).join(',');
    }
}