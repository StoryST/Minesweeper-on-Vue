<template>
	<div>
		<h1 class="title">Добро пожаловать в игру "Сапер"</h1>
		<p>Давай выберем уровень сложности:</p>
		<ul class="list list-reset">
			<li class="list__item">
				<router-link 
				class="btn-level btn btn-lg btn-block btn-success"
				:to="{
              name: 'game',
              params: {
                rows: 8,
                cols: 8,
                bombs: 10,
              }}"
				>
				Простой</router-link>
				<p class="descr">Поле 8x8, 10 мин</p>
			</li>
			<li class="list__item">
				<router-link 
				class="btn-level btn btn-lg btn-block btn-success"
				:to="{
              name: 'game',
              params: {
                rows: 16,
                cols: 16,
                bombs: 40,
              }}"
				>
				Средний</router-link>
				<p class="descr">Поле 16x16, 40 мин</p>
			</li>
			<li class="list__item">
				<router-link 
				class="btn-level btn btn-lg btn-block btn-success"
				:to="{
              name: 'game',
              params: {
                rows: 32,
                cols: 16,
                bombs: 100,
              }}"
				>
				Сложный</router-link>
				<p class="descr">Поле 32x16, 100 мин</p>
			</li>
		</ul>
	</div>
</template>
  
<script>
export default {

}
</script>
  
<style scoped>
.title {
	margin: 0;
	margin-bottom: 30px;
	text-align: center;
	color: rgb(101, 74, 116);
}

.list {
	display: flex;
	flex-direction: row;
}

.list__item {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
}

.list__item:not(:last-child) {
	margin-right: 30px;
}

.descr {
	margin: 0;
}

.btn-level {
	margin-bottom: 15px;
	min-width: 100px;
}
</style>