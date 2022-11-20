<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateCourseRequest;
use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function createCourse(CreateCourseRequest $request)
    {
        $course = Course::create([
            'title' => $request->title,
            'description' => $request->description,
            'cover_image' => $request->cover_image,
            'professor' => $request->user()->id
        ]);

        return response([
            'message' => 'Course created',
            'course' => $course
        ]);
    }

    public function listPaginated(Request $request)
    {
        return Course::latest()->paginate(8);
    }

    public function listProfessorsPaginated(Request $request)
    {
        return Course::where('professor', $request->user()->id)->latest()->paginate(8);
    }

    public function show($id)
    {
        $course = Course::find($id);

        if(!$course) return response(['message' => 'Course not found'], 404);

        return response(['message' => 'Course found', 'course' => $course]);
    }

    public function list($id)
    {
        return Course::find($id)->courseSections;
    }
}
