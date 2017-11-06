import { Component, OnInit } from '@angular/core';
import { RagnarokService } from './ragnarok.service';
import { Preguntas } from './../../shares/interfaces/preguntas';

@Component({
  selector: 'inter-ragnarok',
  templateUrl: './ragnarok.component.html',
  styleUrls: ['./ragnarok.component.css']
})
export class RagnarokComponent implements OnInit {

  public preguntas: Array<Preguntas>;
  public preguntaSeleccionada = 1;
  public fondo: string;

  constructor(private ragnarokService: RagnarokService) { }

  ngOnInit() {
    this.ragnarokService.getQuestions().subscribe(val => this.preguntas = val);
    this.preguntaSeleccionada = this.randomQuestion();
  }

  private randomQuestion() {
    return Math.floor((Math.random()*3));
  }

}
