<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\CourseSectionController;
use App\Http\Controllers\CourseSectionVideoController;
use App\Http\Controllers\RegisterProfessorController;
use App\Http\Controllers\RegisterStudentController;
use App\Http\Controllers\SuscriptionController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/auth/logout', [AuthController::class, 'logoutUser'])->name('users.logout');
    Route::post('/courses', [CourseController::class, 'createCourse'])->name('courses.create');
    Route::post('/courses/section', [CourseSectionController::class, 'createCourseSection'])->name('course.section.create');
    Route::post('/courses/section/video', [CourseSectionVideoController::class, 'createCourseSectionVideo'])->name('course.section.video.create');
    Route::post('/students/register', [RegisterStudentController::class, 'registerStudent'])->name('students.register');
    Route::post('/professors/register', [RegisterProfessorController::class, 'registerProfessor'])->name('students.register');
    Route::post('/suscriptions/update', [SuscriptionController::class, 'changeSuscription'])->name('suscriptions.changeSuscription');
    Route::get('/professors/courses', [CourseController::class, 'listProfessorsPaginated'])->name('professors.courses.listPaginated');
});

Route::controller(AuthController::class)->group(function () {
    Route::post('/auth/register', 'registerUser')->name('users.register');
    Route::post('/auth/login', 'loginUser')->name('users.login');
});

Route::get('/courses/sections/videos/{id}', [CourseSectionController::class, 'list'])->name('course.section.videos.list');
Route::get('/courses/sections/{id}',  [CourseController::class, 'list'])->name('courses.sections.list');
Route::get('/courses', [CourseController::class, 'listPaginated'])->name('courses.listPaginated');
Route::get('/courses/{id}', [CourseController::class, 'show'])->name('courses.show');
Route::get('/suscriptions', [SuscriptionController::class, 'index'])->name('suscriptions.index');
