import LabelComponent from '@/components/label/label.vue';
import ButtonComponent from '@/components/button/button.vue';
import TareaEditComponent from '@/components/edit-Tarea/edit-Tarea.vue';
import CalculadoraComponents from '@/components/calculadora/calculadora.vue';

export function initCustomVue(vue) {
  vue.component('daic-label', LabelComponent);
  vue.component('daic-button', ButtonComponent);
  vue.component('daic-tarea-edit', TareaEditComponent);
  vue.component('daic-calculadora', CalculadoraComponents);
}
