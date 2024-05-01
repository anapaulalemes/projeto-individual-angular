import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MindverseCardComponent } from '../../components/mindverse-card/mindverse-card.component';
import { ICourse } from '../../interfaces/course.interface';

@Component({
  selector: 'app-mindverse-catalog',
  standalone: true,
  imports: [NgFor, NgIf, MindverseCardComponent],
  templateUrl: './mindverse-catalog.component.html',
  styleUrl: './mindverse-catalog.component.css',
})
export class MindverseCatalogComponent {
  @Output() addCourseToCart: EventEmitter<ICourse> = new EventEmitter();
  mindverseArray: ICourse[] = [
    {
      id: 1,
      title: 'Jardinagem Zen e Origami',
      author: 'Ana',
      description:
        'Este curso combina a arte relaxante da jardinagem zen com a delicadeza do origami. Os alunos aprenderiam a cultivar um jardim tranquilo enquanto exploram a prática meditativa do origami, criando belas formas com papel para decorar seu espaço.',
      published_date: new Date('2024-01-05'),
      price: 59.99,
      totalInStock: 20,
      totalAddedToCart: 0,
    },
    {
      id: 2,
      title: 'Pintura com café e chocolate',
      author: 'Ana',
      description:
        'Neste curso, os alunos utilizariam café e chocolate como meios de pintura para criar obras de arte deliciosamente aromáticas. Eles explorariam técnicas de pintura com esses ingredientes incomuns, enquanto desfrutam do aroma e do sabor tentador durante o processo criativo.',
      published_date: new Date('2024-01-05'),
      price: 59.99,
      totalInStock: 20,
      totalAddedToCart: 0,
    },
    {
      id: 3,
      title: 'Fabricação de Fantasias para Animais de Estimação',
      author: 'Ana',
      description:
        'Uma oficina divertida e prática onde os participantes aprenderiam a criar fantasias criativas e adoráveis para seus animais de estimação. Eles explorariam diferentes materiais e técnicas de costura para projetar trajes únicos que deixariam seus amigos peludos ainda mais fofos.',
      published_date: new Date('2024-01-05'),
      price: 59.99,
      totalInStock: 20,
      totalAddedToCart: 0,
    },
    {
      id: 4,
      title: 'Inteligência Artificial para Arte Generativa',
      author: 'Ana',
      description:
        'Neste curso, os alunos explorariam como a inteligência artificial pode ser usada como uma ferramenta criativa na produção de arte generativa. Eles aprenderiam técnicas de programação e modelagem de dados para criar algoritmos que geram música, arte visual e texto de forma autônoma.',
      published_date: new Date('2024-01-05'),
      price: 39.99,
      totalInStock: 20,
      totalAddedToCart: 0,
    },

    {
      id: 5,
      title: 'Tecnologia de Tecidos Inteligentes e Moda Futurista',
      author: 'Ana',
      description:
        'Este curso combina moda e tecnologia, ensinando aos alunos como integrar componentes eletrônicos em tecidos para criar roupas inteligentes. Eles explorariam sensores, LEDs e outros dispositivos eletrônicos para projetar roupas futuristas que respondem ao ambiente ou interagem com o usuário.',
      published_date: new Date('2024-01-05'),
      price: 39.99,
      totalInStock: 20,
      totalAddedToCart: 0,
    },
  ];

  warnAboutAddCourseToCart(course: ICourse) {
    console.log('teste 1');
    this.addCourseToCart.emit(course);
  }
}
