<template>
    <div class="h-screen">
<div class="w-full h-1/6 bg-slate-300 text-center grid grid-rows-3 justify-center">
<h1 class="font-serif mt-1 row-span-2 text-5xl">Employment in the VueShop</h1>
<div class=""><NuxtLink class="" to="/"><button class="hover:text-rose-300">Home</button></NuxtLink>/<span>recruitment</span></div>
</div>
<form method="post"  id="form_1" action="" dir="rtl" >
         <div class="container w-11/12 mx-auto mt-2">
        <div class="grid grid-cols-3 bg-slate-300 p-4 rounded-2xl bg-opacity-70 justify-items-center">
           <div id="field_1_1" class="mx-auto">
                <label class="" for="input_1_1">نام و نام خانوادگی<span class=""><span class="">*</span></span></label>
                <div class=""><input @blur="blurAnimation"  @focus="focusAnimation" name="input_1" id="input_1_1" type="text" value="" class="rounded-lg px-1 focus:shadow-xl focus:shadow-sky-400" aria-required="true" aria-invalid="false"></div></div>
             <div id="field_1_3" class="" data-js-reload="field_1_3">
                <label class="" for="input_1_3">نام پدر</label>
                <div class=""><input  @blur="blurAnimation"  @focus="focusAnimation" name="input_3" id="input_1_3" type="text" value="" class="rounded-lg px-1 focus:shadow-xl focus:shadow-sky-400" aria-invalid="false"></div>
            </div>
             <div id="field_1_15" class="">
               <label class="" for="input_1_15">ایمیل</label>
               <div class=""><input  @blur="blurAnimation"  @focus="focusAnimation" name="input_15" id="input_1_15" type="text" value="" class="rounded-lg px-1 focus:shadow-xl focus:shadow-sky-400" aria-invalid="false"></div>
            </div>
           <div id="field_1_4" class="" >
                <label class="" for="input_1_4">کد ملی<span class="gfield_required"><span class="">
                *</span></span></label>
                <div class=""><input  @blur="blurAnimation"  @focus="focusAnimation" name="input_4" id="input_1_4" type="text" value="" class="rounded-lg px-1 focus:shadow-xl focus:shadow-sky-400" aria-required="true" aria-invalid="false" maxlength="10">
                </div><span class="" id="ir_national_id_location_4"></span>
            </div>
             <div id="field_1_22" class="" data-js-reload="field_1_22">
                <label class="" for="input_1_22">شماره همراه
                <span class=""><span class="">*</span></span>
                </label>
                <div class=""><input @blur="blurAnimation"  @focus="focusAnimation" name="input_22" id="input_1_22" type="text" value="" class="rounded-lg px-1 focus:shadow-xl focus:shadow-sky-400" aria-required="true" aria-invalid="false"></div>
            </div>
              <fieldset id="field_1_5" class="" data-js-reload="field_1_5">
              <legend class="">تاریخ تولد</legend>
              <div id="input_1_5" class="flex gap-2">
              <div class="" id="input_1_5_3_container">
              <select  @blur="blurAnimation"  @focus="focusAnimation" name="input_5[]" id="input_1_5_3" class="rounded-lg px-1 focus:shadow-inner focus:shadow-sky-400"  aria-required="false">
              <option value="">سال</option>
              <option value="1424">1424</option>
              <option value="1423">1423</option>
              <option value="1422">1422</option>
              <option value="1421">1421</option>
              <option value="1420">1420</option>
              <option value="1419">1419</option>
              <option value="1418">1418</option>
              <option value="1417">1417</option>
              <option value="1416">1416</option>
              <option value="1415">1415</option>
              <option value="1414">1414</option>
              <option value="1413">1413</option>
              <option value="1412">1412</option>
              <option value="1411">1411</option>
              <option value="1410">1410</option>
              <option value="1409">1409</option>
              <option value="1408">1408</option>
              <option value="1407">1407</option>
              <option value="1406">1406</option>
              <option value="1405">1405</option>
              <option value="1404">1404</option>
              <option value="1403">1403</option>
              <option value="1402">1402</option>
              <option value="1401">1401</option>
              <option value="1400">1400</option>
              <option value="1399">1399</option>
              <option value="1398">1398</option>
              <option value="1397">1397</option>
              <option value="1396">1396</option>
              <option value="1395">1395</option>
              <option value="1394">1394</option>
              <option value="1393">1393</option>
              <option value="1392">1392</option>
              <option value="1391">1391</option>
              <option value="1390">1390</option>
              <option value="1389">1389</option>
              <option value="1388">1388</option>
              <option value="1387">1387</option>
              <option value="1386">1386</option>
              <option value="1385">1385</option>
              <option value="1384">1384</option>
              <option value="1383">1383</option>
              <option value="1382">1382</option>
              <option value="1381">1381</option>
              <option value="1380">1380</option>
              <option value="1379">1379</option>
              <option value="1378">1378</option>
              <option value="1377">1377</option>
              <option value="1376">1376</option>
              <option value="1375">1375</option>
              <option value="1374">1374</option>
              <option value="1373">1373</option>
              <option value="1372">1372</option>
              <option value="1371">1371</option>
              <option value="1370">1370</option>
              <option value="1369">1369</option>
              <option value="1368">1368</option>
              <option value="1367">1367</option>
              <option value="1366">1366</option>
              <option value="1365">1365</option>
              <option value="1364">1364</option>
              <option value="1363">1363</option>
              <option value="1362">1362</option>
              <option value="1361">1361</option>
              <option value="1360">1360</option>
              <option value="1359">1359</option>
              <option value="1358">1358</option>
              <option value="1357">1357</option>
              <option value="1356">1356</option>
              <option value="1355">1355</option>
              <option value="1354">1354</option>
              <option value="1353">1353</option>
              <option value="1352">1352</option>
              <option value="1351">1351</option>
              <option value="1350">1350</option>
              <option value="1349">1349</option>
              <option value="1348">1348</option>
              <option value="1347">1347</option>
              <option value="1346">1346</option>
              <option value="1345">1345</option>
              <option value="1344">1344</option>
              <option value="1343">1343</option>
              <option value="1342">1342</option>
              <option value="1341">1341</option>
              <option value="1340">1340</option>
              <option value="1339">1339</option>
              <option value="1338">1338</option>
              <option value="1337">1337</option>
              <option value="1336">1336</option>
              <option value="1335">1335</option>
              <option value="1334">1334</option>
              <option value="1333">1333</option>
              <option value="1332">1332</option>
              <option value="1331">1331</option>
              <option value="1330">1330</option>
              <option value="1329">1329</option>
              <option value="1328">1328</option>
              <option value="1327">1327</option>
              <option value="1326">1326</option>
              <option value="1325">1325</option>
              <option value="1324">1324</option>
              <option value="1323">1323</option>
              <option value="1322">1322</option>
              <option value="1321">1321</option>
              <option value="1320">1320</option>
              <option value="1319">1319</option>
              <option value="1318">1318</option>
              <option value="1317">1317</option>
              <option value="1316">1316</option>
              <option value="1315">1315</option>
              <option value="1314">1314</option>
              <option value="1313">1313</option>
              <option value="1312">1312</option>
              <option value="1311">1311</option>
              <option value="1310">1310</option>
              <option value="1309">1309</option>
              <option value="1308">1308</option>
              <option value="1307">1307</option>
              <option value="1306">1306</option>
              <option value="1305">1305</option>
              <option value="1304">1304</option>
              <option value="1303">1303</option>
              <option value="1302">1302</option>
              <option value="1301">1301</option>
              <option value="1300">1300</option>
              </select></div>
              <div class="" id="input_1_5_1_container">
              <select  @blur="blurAnimation"  @focus="focusAnimation" name="input_5[]" id="input_1_5_1" class="rounded-lg px-1 focus:shadow-inner focus:shadow-sky-400"  aria-required="false">
              <option value="">ماه</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option></select></div>
              <div class="" id="input_1_5_2_container">
              <select  @blur="blurAnimation"  @focus="focusAnimation" name="input_5[]" class="rounded-lg px-1 focus:shadow-inner focus:shadow-sky-400" id="input_1_5_2" aria-required="false">
              <option value="">روز</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select></div></div></fieldset>
          <div id="field_1_8" class="" data-js-reload="field_1_8">
              <label class="" for="input_1_8">شماره تلفن ثابت</label>
              <div class=""><input  @blur="blurAnimation"  @focus="focusAnimation" name="input_8" id="input_1_8" type="text" value="" class="rounded-lg px-1 focus:shadow-xl focus:shadow-sky-400" aria-invalid="false"></div>
            </div>
           <div id="field_1_6" class="w-6/12" data-js-reload="field_1_6">
              <label class="" for="input_1_6">وضعیت تاهل</label>
              <div class="">
              <select  @blur="blurAnimation"  @focus="focusAnimation" name="input_6" id="input_1_6" class="w-full rounded-lg focus:shadow-inner focus:shadow-sky-400" aria-invalid="false">
              <option value="مجرد">مجرد</option>
              <option value="متاهل">متاهل</option>
              </select></div></div>
             <div id="field_1_7" class="">
              <label class="" for="input_1_7">میزان تحصیلات</label>
              <div class="">
              <select  @blur="blurAnimation"  @focus="focusAnimation" name="input_7" id="input_1_7" class="rounded-lg focus:shadow-inner focus:shadow-sky-400" aria-invalid="false">
              <option value="مشغول به تحصیل">مشغول به تحصیل</option>
              <option value="فوق لیسانس">فوق لیسانس</option>
              <option value="لیسانس">لیسانس</option>
              <option value="فوق دیپلم">فوق دیپلم</option>
              <option value="دیپلم">دیپلم</option>
              <option value="زیر دیپلم">زیر دیپلم</option>
              <option value="بدون تحصیلات">بدون تحصیلات</option>
            </select></div></div>
          
            <div id="field_1_23" class="w-7/12">
              <label class="" for="input_1_23">میزان سابقه برحسب سال</label>
              <div class="">
              <select  @blur="blurAnimation"  @focus="focusAnimation" name="input_23" id="input_1_23" class="w-full rounded-lg focus:shadow-inner focus:shadow-sky-400" aria-invalid="false">
              <option value="یک سال">یک سال</option>
              <option value="دو سال">دو سال</option>
              <option value="سه سال">سه سال</option>
              <option value="بیشتر از چهار سال">بیشتر از چهار سال</option>
            </select></div></div>
            <div id="field_1_24" class="">
            <label class="" for="input_1_24">میزان سابقه در سایر سطوح کار</label>
            <div class=" ">
            <select  @blur="blurAnimation"  @focus="focusAnimation" name="input_24" id="input_1_24" class="w-full rounded-lg focus:shadow-inner focus:shadow-sky-400" aria-invalid="false">
            <option value="یک سال">یک سال</option>
            <option value="دو سال">دو سال</option>
            <option value="سه سال">سه سال</option>
            <option value="بیشتر از چهار سال">بیشتر از چهار سال</option>
            </select></div></div>
             <div id="field_1_12" class="">
            <label class="" for="input_1_12">امکان حضور<span class=""><span class="">*</span></span></label>
            <div class="">
            <select  @blur="blurAnimation"  @focus="focusAnimation" name="input_12" id="input_1_12" class="rounded-lg focus:shadow-inner focus:shadow-sky-400" aria-required="true" aria-invalid="false">
            <option value="تمام وقت">تمام وقت</option>
            <option value="پاره وقت">پاره وقت</option>
            </select></div></div>
          <div id="field_1_14" class="grid grid-cols-3 col-span-3 w-full mt-3">
            <div id="field_1_17" class="w-7/12 mx-auto">
            <label class="" for="input_1_14">آدرس محل سکونت</label>
            <div>
            <select  @blur="blurAnimation"  @focus="focusAnimation" name="input_14" id="input_1_14" class="w-full float-left rounded-lg shadow-lg focus:shadow-inner focus:shadow-sky-400" aria-invalid="false">
            <option value="تهران">تهران</option>
            <option value="حومه تهران">حومه تهران</option>
            <option value="خارج از تهران و شهرستان های دیگر">خارج از تهران و شهرستان های دیگر</option></select></div></div>
          <div id="field_1_18" class="w-6/12 mx-auto">
            <label class="" for="input_1_18">عنوان شغلی مورد تقاضا</label>
            <div class="">
            <select  @blur="blurAnimation"  @focus="focusAnimation" name="input_18" id="input_1_18" class="rounded-lg focus:shadow-xl focus:shadow-sky-500" aria-invalid="false">
            <option value="کارشناس فروش فروشگاهی">کارشناس فروش فروشگاهی</option>
            <option value="کارشناس تامین و خرید">کارشناس تامین و خرید</option>
            <option value="کارشناس فنی و تعمیرات">کارشناس فنی و تعمیرات</option>
            <option value="کارشناس آی تی">کارشناس آی تی</option>
            <option value="کارشناس ادمین">کارشناس ادمین</option>
            <option value="کارشناس مالی و حسابداری">کارشناس مالی و حسابداری</option>
            <option value="کارشناس اداری">کارشناس اداری</option>
            <option value="کارشناس فروش مجازی">کارشناس فروش مجازی</option>
            <option value="کارشناس انبار">کارشناس انبار</option>
            <option value="صندوقدار">صندوقدار</option>
            <option value="مرچندایزر">مرچندایزر</option>
            <option value="کارمند خدمات">کارمند خدمات</option>
            <option value="تحصیل دار">تحصیل دار</option>
            <option value="سایر">سایر</option>
            </select></div></div>
          <div id="field_1_19" class="" style="display: none;">
            <label class="" for="input_1_19">سایر</label>
            <div class=""><input name="input_19" id="input_1_19" type="text" value="" class="rounded-lg px-1" aria-invalid="false" disabled="disabled"></div></div>
            <div id="field_1_20" class="w-11/12 mx-auto">
            <label class="" for="input_1_20">فایل رزومه</label>
            <div class="flex items-center"><input @focus="focusAnimation" type="hidden" class="" name="MAX_FILE_SIZE" value="52428800"><input name="input_20" id="input_1_20" type="file" class=""><span class="text-nowrap font-sans ">Max. file size: <span class="text-red-800">50 MB</span></span><div class="" id="live_validation_message_1_20"></div></div>
            <div class="" id="description_1_20">در صورت داشتن فایل رزومه در این بخش برای ما آپلود کنید</div></div>
            
            </div></div>

             <div class=" mt-3 mr-1"><button class="bg-indigo-300 p-2 hover:bg-indigo-100 border-2  rounded-lg hover:shadow-xl hover:shadow-teal-500" type="submit">ثبت درخواست</button></div>
             
           </div>
        
</form>
    </div>
</template>

<script setup>
definePageMeta({
  middleware:'check'
})
///create an array to store animation class of animate.css
const animationArray=['animate__rubberBand','animate__pulse','animate__flipInY','animate__bounceIn','animate__flipInX','animate__flipInY']
///create avariable to store animation target
let target=null
let id
function focusAnimation(event){
 
  id=event.target.id
  target=document.getElementById(id)
 target.classList.add('animate__animated')
 target.classList.add('animate__flipInY')


}
function blurAnimation(event){
  id=event.target.id
  target=document.getElementById(id)
  target.classList.remove('animate__animated')
  target.classList.remove(`animate__flipInY`)
}
</script>

<style scoped>

</style>
