import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MindverseCardComponent } from '../../components/mindverse-card/mindverse-card.component';
import { ICourse } from '../../interfaces/course.interface';

@Component({
  selector: 'app-mindverse-catalog',
  standalone: true,
  imports: [NgFor, NgIf, MindverseCardComponent],
  templateUrl: './mindverse-catalog.component.html',
  styleUrl: './mindverse-catalog.component.css',
})
export class MindverseCatalogComponent implements OnInit {
  @Output() addCourseToCart: EventEmitter<ICourse> = new EventEmitter();
  mindverseArray: ICourse[] = [
    {
      id: 1,
      title: 'Universo em Dados: Explorando o Cosmos com Análise de Dados',
      author: 'Ana',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/NASA-HS201427a-HubbleUltraDeepField2014-20140603.jpg/1024px-NASA-HS201427a-HubbleUltraDeepField2014-20140603.jpg',
      description:
        'Neste curso, os alunos mergulharão na vastidão do universo através da análise de dados astronômicos. Haverá técnicas de coleta, organização e análise de dados provenientes de telescópios espaciais, sondas espaciais e observatórios terrestres. Utilizando ferramentas de visualização de dados e software de análise estatística, os alunos investigão fenômenos cósmicos, como a formação de estrelas, a evolução das galáxias e a busca por vida extraterrestre. Este curso combina ciência de dados e astronomia para uma compreensão mais profunda do universo que nos rodeia.',
      publishedDate: new Date('2024-01-05'),
      price: 79.99,
      totalInStock: 20,
      totalAddedToCart: 0,
    },
    {
      id: 2,
      title: 'Pintura com café e chocolate',
      author: 'Ana',
      img: 'https://img.freepik.com/fotos-premium/uma-pintura-em-aquarela-de-uma-xicara-de-cafe-com-chocolate-e-graos-de-cafe_916626-20.jpg',
      description:
        'Neste curso, os alunos utilizariam café e chocolate como meios de pintura para criar obras de arte deliciosamente aromáticas. Eles explorariam técnicas de pintura com esses ingredientes incomuns, enquanto desfrutam do aroma e do sabor tentador durante o processo criativo.',
      publishedDate: new Date('2024-01-05'),
      price: 59.99,
      totalInStock: 20,
      totalAddedToCart: 0,
    },
    {
      id: 3,
      title: 'Fabricação de Fantasias para Animais de Estimação',
      author: 'Ana',
      img: 'https://http2.mlstatic.com/D_NQ_NP_651344-CBT51013353042_082022-O.webp',
      description:
        'Uma oficina divertida e prática onde os participantes aprenderiam a criar fantasias criativas e adoráveis para seus animais de estimação. Eles explorariam diferentes materiais e técnicas de costura para projetar trajes únicos que deixariam seus amigos peludos ainda mais fofos.',
      publishedDate: new Date('2024-01-05'),
      price: 59.99,
      totalInStock: 20,
      totalAddedToCart: 0,
    },
    {
      id: 4,
      title: 'Inteligência Artificial para Arte Generativa',
      author: 'Ana',
      img: 'https://www.hardware.com.br/wp-content/uploads/2023/07/IA-Generativa-scaled.jpeg.png',
      description:
        'Neste curso, os alunos explorariam como a inteligência artificial pode ser usada como uma ferramenta criativa na produção de arte generativa. Eles aprenderiam técnicas de programação e modelagem de dados para criar algoritmos que geram música, arte visual e texto de forma autônoma.',
      publishedDate: new Date('2024-01-05'),
      price: 39.99,
      totalInStock: 20,
      totalAddedToCart: 0,
    },

    {
      id: 5,
      title: 'Tecnologia de Tecidos Inteligentes e Moda Futurista',
      author: 'Ana',
      img: 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2023/12/07/ia-disenadora-de-moda.jpeg',
      description:
        'Este curso combina moda e tecnologia, ensinando aos alunos como integrar componentes eletrônicos em tecidos para criar roupas inteligentes. Eles explorariam sensores, LEDs e outros dispositivos eletrônicos para projetar roupas futuristas que respondem ao ambiente ou interagem com o usuário.',
      publishedDate: new Date('2024-01-05'),
      price: 39.99,
      totalInStock: 20,
      totalAddedToCart: 0,
    },
  ];

  // ngOnInit() {
  //   this.mindverseArray = JSON.parse(
  //     localStorage.getItem('mindverseArray') || '[]'
  //   );
  // }

  ngOnInit(): void {
    const storedMindverse = localStorage.getItem('mindverseArray');
    if (storedMindverse) {
      this.mindverseArray = JSON.parse(storedMindverse);
    } else {
      localStorage.setItem(
        'mindverseArray',
        JSON.stringify(this.mindverseArray)
      );
    }
  }

  warnAboutAddCourseToCart(course: ICourse) {
    console.log('teste 1');
    this.addCourseToCart.emit(course);
  }
}
