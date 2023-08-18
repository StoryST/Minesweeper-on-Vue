<template>
	<div>
		<div class="container pb-3">
			<div class="row justify-content-md-center">
				<div class="col" v-if="doesItFit()" :class="{ 'col-md-9 col-lg-7': cols < 14 }">
					<minesweeper-game :rows="rows" :cols="cols" :bombs="bombs"></minesweeper-game>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import MinesweeperGame from './components/UI/MinesweeperGame.vue';
export default {
	name: 'home',
	components: {
		MinesweeperGame
	},
	data() {
		return {
			rows: 9,
			cols: 9,
			bombs: 10,
		};
	},
	mounted() {
		this.initParams(this.$route.params);
	},
	methods: {
		doesItFit() {
			const { rows, cols, bombs } = this;
			if ((rows * cols) < bombs) {
				return false;
			}
			if (rows > 50) {
				return false;
			}
			if (cols > 50) {
				return false;
			}
			if (bombs > 99) {
				return false;
			}
			return true;
		},
		initParams(params) {
			const { rows, cols, bombs } = params;
			this.rows = parseInt(rows) || 9;
			this.cols = parseInt(cols) || 9;
			this.bombs = parseInt(bombs) || 10;
		},
		updateRoute(extraParams) {
			console.log('a');
			const { rows, cols, bombs } = this;
			const params = Object.assign({
				rows,
				cols,
				bombs,
			}, extraParams);

			this.$router.push({
				name: 'game',
				params,
			});
		},
	},
};
</script>

<style scoped></style>