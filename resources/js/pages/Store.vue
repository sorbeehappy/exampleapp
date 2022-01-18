<template>
        <div class="container-fluid">
                
                <div class="row page-titles">
                    <div class="col-md-5 align-self-center">
                        <h4 class="text-themecolor">Dashboard 1</h4>
                    </div>
                    <div class="col-md-7 align-self-center text-end">
                        <div class="d-flex justify-content-end align-items-center">
                            <ol class="breadcrumb justify-content-end">
                                <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                <li class="breadcrumb-item active">Store</li>
                            </ol>
                            <button type="button" class="btn btn-info d-none d-lg-block m-l-15 text-white"><i class="fa fa-plus-circle"></i> Create New</button>
                        </div>
                    </div>
                </div>

                

            


        <div class="row g-0">
					<div class="col-lg-3 col-md-6">
						<div class="card border">
							<div class="card-body">
								<div class="row">
									<div class="col-md-12">
										<div class="d-flex no-block align-items-center">
											<div>
												<h3><i class="icon-screen-desktop"></i></h3>
												<p class="text-muted">MYNEW CLIENTS</p>
											</div>
											<div class="ms-auto">
												<h2 class="counter text-primary">23</h2>
											</div>
										</div>
									</div>
									<div class="col-12">
										<div class="progress">
											<div class="progress-bar bg-primary" role="progressbar" style="width: 85%; height: 6px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="col-lg-3 col-md-6">
						<div class="card border">
							<div class="card-body">
								<div class="row">
									<div class="col-md-12">
										<div class="d-flex no-block align-items-center">
											<div>
												<h3><i class="icon-note"></i></h3>
												<p class="text-muted">NEW PROJECTS</p>
											</div>
											<div class="ms-auto">
												<h2 class="counter text-cyan">169</h2>
											</div>
										</div>
									</div>
									<div class="col-12">
										<div class="progress">
											<div class="progress-bar bg-cyan" role="progressbar" style="width: 85%; height: 6px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="col-lg-3 col-md-6">
						<div class="card border">
							<div class="card-body">
								<div class="row">
									<div class="col-md-12">
										<div class="d-flex no-block align-items-center">
											<div>
												<h3><i class="icon-doc"></i></h3>
												<p class="text-muted">NEW INVOICES</p>
											</div>
											<div class="ms-auto">
												<h2 class="counter text-purple">157</h2>
											</div>
										</div>
									</div>
									<div class="col-12">
										<div class="progress">
											<div class="progress-bar bg-purple" role="progressbar" style="width: 85%; height: 6px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="col-lg-3 col-md-6">
						<div class="card border">
							<div class="card-body">
								<div class="row">
									<div class="col-md-12">
										<div class="d-flex no-block align-items-center">
											<div>
												<h3><i class="icon-bag"></i></h3>
												<p class="text-muted">All PROJECTS</p>
											</div>
											<div class="ms-auto">
												<h2 class="counter text-success">431</h2>
											</div>
										</div>
									</div>
									<div class="col-12">
										<div class="progress">
											<div class="progress-bar bg-success" role="progressbar" style="width: 85%; height: 6px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

                <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                {{FormShow}}
                                <div class="d-flex justify-content-between">
									<div>
								<h4 class="card-title">ລາຍການສະຕ໋ອກສິນຄ້າ </h4>
									</div>
									
									<div>
										<button type="button" v-if="FormShow" @click="SaveForm()" class="btn waves-effect waves-light btn-success me-2">ບັນທຶກ</button>
										<button type="button" v-if="FormShow" @click="Cancel()" class="btn waves-effect waves-light btn-danger me-2">ຍົກເລີກ</button>
										<button type="button" v-if="!FormShow" @click="AddNew()" class="btn waves-effect waves-light btn-info">ເພີ່ມໃໝ່</button>
									</div>
                                    
								</div>
                                         {{FormData}}
                                           <hr>
                                <div class="row" v-if="FormShow">
                                        <div class="col-md-3">
                                                <img :src="imagePreview" alt="">
                                                <input type="file" class="form-control">
                                        </div>
                                        <div class="col-md-9">
                                          
                                            <div class="form-group">
                                                <label for="product-name" class="form-label"> ຊື່ສິນຄ້າ</label>
                                                <input type="text" class="form-control" id="product-name" v-model="FormProduct.name" placeholder="ປ້ອນຊື່ສິນຄ້າ...">
                                            </div>
                                             <div class="form-group">
                                                <label for="product-amount" class="form-label"> ຈຳນວນ</label>
                                                <input type="text" class="form-control" id="product-amount" v-model="FormProduct.amount" placeholder="ຈຳນວນສິນຄ້າ...">
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="price-buy" class="form-label"> ລາຄາຊື້</label>
                                                        <input type="text" class="form-control" id="price-buy" v-model="FormProduct.price_buy" placeholder="ປ້ອນລາຄາຊື້...">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="price-sell" class="form-label"> ລາຄາຂາຍ</label>
                                                        <input type="text" class="form-control" id="price-sell" v-model="FormProduct.price_sell" placeholder="ປ້ອນລາຄາຂາຍ...">
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                </div>
                                <div class="table-responsive" v-if="!FormShow">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>ລະຫັດ</th>
                                                <th>ຊື່ສິນຄ້າ</th>
                                                <th>ຈຳນວນ</th>
                                                <th>ລາຄາຊື່</th>
                                                <th>ຈັດການ</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><a href="javascript:void(0)">Order #26589</a></td>
                                                <td>Herman Beck</td>
                                                <td><span class="text-muted"><i class="fa fa-clock-o"></i> Oct 16, 2017</span> </td>
                                                <td>$45.00</td>
                                                <td>
                                                    <div class="label label-table label-success">Paid</div>
                                                </td>
                                            </tr>
                                         
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
</template>

<script>
export default {
    name: 'ExampleAppHome',

    data() {
        return {
            FormData:[],
            FormShow: false,
            urllocation: window.location.origin,
            imagePreview: window.location.origin+"/assets/images/add_images.png",
            FormProduct: {
                name:'',
                amount:'',
                price_buy:'',
                price_sell:''
            }
        };
    },

    mounted() {
        
    },

    methods: {
        
		AddNew(){
			this.FormShow = true
		},
		Cancel(){
			this.FormShow = false
		},
        SaveForm(){
            console.log(this.FormProduct);
            this.FormData.push({
                id: Math.floor(Math.random() * 1000),
                name: this.FormProduct.name,
                amount: this.FormProduct.amount,
                price_buy: this.FormProduct.price_buy,
                price_sell: this.FormProduct.price_sell

            });

            this.FormProduct.name=''
            this.FormProduct.amount=''
            this.FormProduct.price_buy=''
            this.FormProduct.price_sell=''
            this.FormShow= false
        }
    },
};
</script>

<style lang="scss" scoped>

</style>