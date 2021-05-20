import { Persona } from './Persona';

export interface Employee extends Persona {
  job: String;
  salary: String;
}
